import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.htmlRef = React.createRef();
  }

  componentDidMount() {
    console.log("render home ", this.htmlRef);
  }

  render() {
    return (
      <div ref={this.htmlRef} className="page home">
        <div className="homeDeco homeDecoLeft">
          <div className="sideBar"></div>
          <div className="connectors">
            <div className="line"></div>
            <div>
              <div className="line"></div>
              <div className="blocks">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <article className="homeNameHolder">
          <header>
            <h2>Tim D'hoore</h2>
            <p>Creative coder</p>
          </header>
          <img src="" alt="tim D'hoore logo" />
        </article>
        <div className="homeDeco homeDecoLeft">
          <div className="sideBar"></div>
          <div className="connectors">
            <div className="line"></div>
            <div>
              <div className="line"></div>
              <div className="blocks">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
