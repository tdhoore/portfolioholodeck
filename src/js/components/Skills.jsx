import React, { Component } from "react";
import SkillItem from "./SkillItem.jsx";
import { connect } from "react-redux";

class Skills extends Component {
  componentDidMount() {
    //update css3D
  }

  render() {
    return (
      <section className="skillsHolder">
        <header className="hide">
          <h3>skills</h3>
        </header>
        {this.props.allSkills.map(content => {
          return <SkillItem key={`skillItem${content.id}`} content={content} />;
        })}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    allSkills: state.allSkills
  };
};

export default connect(mapStateToProps)(Skills);
