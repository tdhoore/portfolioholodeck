import React, { Component } from "react";
import Skills from "./skills.jsx";

export default class About extends Component {
  render() {
    return (
      <section>
        <header className="hide">
          <h2>about</h2>
        </header>
        <article>
          <header>
            <h3>Tim D'hoore</h3>
            <p>creative coder</p>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            accusamus ut distinctio! Illo, est? Rerum, sed. Tempora magnam unde
            pariatur odit laborum aliquid quia aspernatur? Facere deleniti ex
            reiciendis sequi.
          </p>
        </article>
        <Skills />
      </section>
    );
  }
}
