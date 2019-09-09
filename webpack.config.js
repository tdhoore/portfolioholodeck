const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = (env, { mode }) => {
  console.log(mode);

  const plugins = [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css"
    }),
    new OptimizeCSSAssetsPlugin()
  ];

  if (mode === "production") {
    const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
    const path = require("path");
    plugins.push(
      new HtmlCriticalWebpackPlugin({
        base: path.resolve(__dirname, "dist"),
        src: "index.html",
        dest: "index.html",
        inline: true,
        minify: true,
        extract: true,
        width: 1500, // standaard op 375x565, maar niet voldoende om op desktop 100% te scoren
        height: 700,
        penthouse: {
          blockJSRequests: false
        }
      })
    );
  } else {
    const webpack = require("webpack");
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return {
    output: { filename: "[name].[hash].js" },
    devServer: {
      overlay: true,
      hot: true,
      contentBase: "./src",
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(woff|woff2)$/,
          loader: `url-loader`,
          options: {
            limit: 1000,
            context: `./src`,
            name: `[path][name].[ext]`
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-srcsets-loader",
              options: { attrs: [":src", ":srcset"] }
            }
          ]
        },
        {
          test: /\.(jpe?g|png|svg|webp|mp4)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "[path][name].[ext]"
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            mode === "production"
              ? MiniCssExtractPlugin.loader
              : "style-loader",
            "css-loader",
            "resolve-url-loader"
          ]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader"
          ]
        }
      ]
    },
    plugins
  };
};
