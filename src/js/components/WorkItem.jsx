import React, { Component } from "react";

export default class WorkItem extends Component {
  componentDidMount() {
    //update css3D
  }

  render() {
    const d = this.props.content;

    return (
      <Link to={`/project/${d.id}`}>
        <article className="workItem">
          <header>
            <h3>{d.title}</h3>
            <p>{d.category}</p>
          </header>
          <img src={d.mainImage} alt={d.title} />
        </article>
      </Link>
    );
  }
}
