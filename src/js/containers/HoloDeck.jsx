import React, { Component } from "react";
import {
  Route,
  BrowserRouter
} from "react-router-dom";
import Page from "./Page.jsx"
import { connect } from "react-redux";

class HoloDeck extends Component {
  render() {
    
    return (
      <BrowserRouter>
        <Route path={"/"} render={
          (props) => <Page {...props} pageTitle={this.props.pageTitle} />
          }/>
        <Route path={"/work"} component={Page}/>
        <Route path={"/project/:id"} component={Page}/>
        <Route path={"/about"} component={Page}/>
        <Route path={"/contact"} component={Page}/>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pageTitle: state.pageTitle
  };
};

export default connect(mapStateToProps)(HoloDeck);
