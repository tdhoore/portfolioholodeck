import React, { Component } from "react";
import PageSlider from "./PageSlider.jsx";
import SubNav from "./SubNav.jsx";
import { connect } from "react-redux";

class Work extends Component {
  render() {
    return (
      <section>
        <h2 className="hide">Work</h2>
        <PageSlider
          contentType="work"
          content={this.props.allProjects}
          current={this.props.currentWork}
          max={this.props.maxWorks}
        />
        <SubNav current={this.props.currentWork} max={this.props.maxWorks} />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentWork: state.currentWork,
    maxWorks: state.maxWorks,
    allProjects: state.allProjects
  };
};

export default connect(mapStateToProps)(Work);
