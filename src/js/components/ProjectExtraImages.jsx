import React, { Component } from "react";

export default class ProjectExtraImages extends Component {
  render() {
    return (
      <section>
        <header className="hide">
          <h3>Project gallery</h3>
        </header>
        {this.props.content.map((item, index) => {
          return (
            <img
              key={`extraImages${item.index}${item.title}`}
              src={item.image}
              alt={item.title}
              className={item.className}
            />
          );
        })}
      </section>
    );
  }
}
