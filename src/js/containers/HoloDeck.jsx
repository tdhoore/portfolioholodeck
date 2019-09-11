import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page from "./Page.jsx";
import { connect } from "react-redux";

class HoloDeck extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path={"/"}
            render={props => <Page {...props} pageTitle="Home" />}
          />
          <Route
            exact
            path={"/work"}
            render={props => <Page {...props} pageTitle="Work" />}
          />
          <Route
            exact
            path={"/project/:id"}
            render={props => <Page {...props} pageTitle="Project" />}
          />
          <Route
            exact
            path={"/about"}
            render={props => <Page {...props} pageTitle="About" />}
          />
          <Route
            exact
            path={"/contact"}
            render={props => <Page {...props} pageTitle="Contact" />}
          />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    pageTitle: state.pageTitle
  };
};

export default connect(mapStateToProps)(HoloDeck);
