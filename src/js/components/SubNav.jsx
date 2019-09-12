import React, { Component } from "react";

class SubNav extends Component {
  sliderOrCounter() {
    if (this.props.current !== undefined && this.props.max !== undefined) {
      //is counter so get the maxWorks

      //render counter
      return (
        <div className="counter">
          <p>{this.props.current + 1}</p>
          <p>{this.props.max}</p>
        </div>
      );
    } else {
      //render slider
      return (
        <div className="slider">
          <input type="range" min="0" max="360" value="0" />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="subNav">
        <button>prev</button>
        {this.sliderOrCounter()}
        <button>next</button>
      </div>
    );
  }
}

export default SubNav;
