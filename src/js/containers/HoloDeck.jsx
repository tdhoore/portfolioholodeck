import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Page from "./Page.jsx";
import { connect } from "react-redux";

const history = createBrowserHistory();

class HoloDeck extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
            exact
            path={"/"}
            render={props => <Page {...props} pageTitle="Home" />}
          />
          <Route exact path={"/work"} component={Page} />
          <Route
            exact
            path={"/project/:id"}
            render={props => <Page {...props} pageTitle="Project" />}
          />
          <Route exact path={"/about"} component={Page} />
          <Route exact path={"/contact"} component={Page} />
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
