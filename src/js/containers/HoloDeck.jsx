import React, { Component } from "react";
import { BrowserRouter, Route, browserHistory } from "react-router";

export default class HoloDeck extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter history={browserHistory}>
        <Route path={"/"} Component={home} />
        <Route path={"/work"} Component={home} />
        <Route path={"/project/:id"} Component={home} />
        <Route path={"/about"} Component={home} />
        <Route path={"/contact"} Component={home} />
      </BrowserRouter>
    );
  }
}
