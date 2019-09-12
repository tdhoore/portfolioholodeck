import React, { Component } from "react";

export default class SkillItem extends Component {
  render() {
    const d = this.props.content;

    return (
      <article className="skill">
        <header>
          <h4>{d.title}</h4>
          <p>{d.levelName}</p>
        </header>
        <img src={d.image} alt={d.title} />
      </article>
    );
  }
}
