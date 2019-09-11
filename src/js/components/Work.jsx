import React, { Component } from "react";
import SubNav from "./SubNav.jsx";
import { connect } from "react-redux";

class Work extends Component {
  render() {
    return (
      <div>
        <SubNav current={this.props.currentWork} max={this.props.maxWorks} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentWork: state.currentWork,
    maxWorks: state.maxWorks
  };
};

export default connect(mapStateToProps)(Work);
