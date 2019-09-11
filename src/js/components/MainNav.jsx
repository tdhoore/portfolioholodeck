import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainNav extends Component {
  render() {
    return (
      <header className="mainHeader">
        <h1 className="hide">Tim D'hoore - {this.props.pageTitle}</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default MainNav;
