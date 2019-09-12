import React, { Component } from "react";

export default class ExtraInfoItem extends Component {
  getcontent() {
    if (this.props.color !== undefined) {
      //is a color
      return <div className="colorSample">{this.props.color.title}</div>;
    } else if (this.props.image !== undefined) {
      //is a tech
      return (
        <img
          src={this.props.image.url}
          alt={this.props.image.title}
          className={this.props.image.className}
        />
      );
    }
  }

  getTitle() {
    if (this.props.color !== undefined) {
      //is a color
      return this.props.color.title;
    } else if (this.props.image !== undefined) {
      //is a tech
      return this.props.image.title;
    }
  }

  render() {
    return (
      <article>
        <header>
          <h4>{this.getTitle()}</h4>
        </header>
        {this.getcontent()}
      </article>
    );
  }
}
