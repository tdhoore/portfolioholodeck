import "./css/style.scss";
import * as THREE from "three";
import ReactDOM from "react-dom";
import React from "react";
import Scene from "./js/classes/Scene.js";
import HoloDeck from "./js/containers/HoloDeck.jsx";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./js/reducers/rootReducer.js";

class App {
  constructor() {
    this.player = false;
    this.container = document.querySelector("#sceneHolder");
  }

  loadScene() {
    const loader = new THREE.FileLoader();
    loader.load("meshes/scene.json", text => {
      this.player = new Scene();
      this.player.load(JSON.parse(text));

      //set the size of the scene
      this.player.setSize(window.innerWidth, window.innerHeight);
      this.player.play();

      this.container.appendChild(this.player.dom);

      //add resize event for webgl and css scenes
      window.addEventListener("resize", () => {
        this.player.setSize(window.innerWidth, window.innerHeight);
      });
    });
  }
}

//initilaize app
const app = new App();

//load scene
app.loadScene();

//init store
const store = createStore(rootReducer);

//init react
ReactDOM.render(
  <Provider store={store}>
    <HoloDeck />
  </Provider>,
  document.getElementById("root")
);
