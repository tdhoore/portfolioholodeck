import React, { Component } from "react";
import ProjectExtraInfo from "./ProjectExtraInfo.jsx";
import ProjectExtraImages from "./ProjectExtraImages.jsx";
import { connect } from "react-redux";

class Project extends Component {
  renderLink() {
    const d = this.props.currentProject;

    if (d.link !== "") {
      //display link
      return (
        <a href={d.link} target="blank">
          {d.linkName}
        </a>
      );
    }
  }

  render() {
    const d = this.props.currentProject;

    return (
      <article>
        <div className="projectInfo">
          <header>
            <h2>{d.title}</h2>
            <p>{d.category}</p>
          </header>
          <img src={d.mainImage} alt={d.title} />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
            placeat ratione, consectetur debitis dolorem architecto praesentium
            numquam, impedit, iure repellendus ad aliquam. Aliquam magnam
            praesentium architecto fugiat hic tenetur enim.
          </p>
          {this.renderLink()}
        </div>
        <ProjectExtraInfo tech={d.tech} colors={d.colors} />
        <ProjectExtraImages content={d.extraImages} />
      </article>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentProject: state.currentProject
  };
};

export default connect(mapStateToProps)(Project);
