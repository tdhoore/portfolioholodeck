import React, { Component } from "react";
import ExtraInfoItem from "./ExtraInfoItem.jsx";

export default class ProjectExtraInfo extends Component {
  render() {
    return (
      <section>
        <header className="hide">
          <h3>Project aditional information</h3>
        </header>
        <article>
          <header>
            <h3>colors</h3>
          </header>
          {this.props.colors.map((item, index) => {
            return (
              <ExtraInfoItem key={`color${index}${item.title}`} color={item} />
            );
          })}
        </article>
        <article>
          <header>
            <h3>tech</h3>
          </header>
          {this.props.tech.map((item, index) => {
            return (
              <ExtraInfoItem key={`tech${index}${item.title}`} image={item} />
            );
          })}
        </article>
      </section>
    );
  }
}
