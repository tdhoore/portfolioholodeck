import React, { Component } from "react";
import WorkItem from "./WorkItem.jsx";

export default class PageSlider extends Component {
  getContent(type) {
    if (type.toLowerCase() === "work") {
      //display work
      return this.getItems(this.props.current, this.props.max).map(index => {
        return (
          <WorkItem
            key={`workItem${index}`}
            content={this.props.content[index]}
          />
        );
      });
    } else if (type.toLowerCase() === "project") {
      //display full projects
    }
  }

  getItems(current, max) {
    //get the correct indexes
    const indexes = [current - 1, current, current + 1];

    //check previous
    if (indexes[0] < 0) {
      //is to small so pick the last index
      indexes[0] = max - 1;
    }

    //check next
    if (indexes[2] >= max) {
      //is to big so get the first index
      indexes[2] = 0;
    }

    return indexes;
  }

  render() {
    return (
      <div className="pageSlider">
        {this.getContent(this.props.contentType)}
      </div>
    );
  }
}
