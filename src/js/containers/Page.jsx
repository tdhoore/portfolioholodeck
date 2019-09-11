import React, { Component } from "react";
import MainNav from "../components/MainNav.jsx";
import Home from "../components/Home.jsx";
import Work from "../components/Work.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Project from "../components/Project.jsx";

export default class Page extends Component {
  getPage(title) {
    if (title.toLowerCase() == "home") {
      //render home page
      return <Home />;
    } else if (title.toLowerCase() == "work") {
      //render work page
      return <Work />;
    } else if (title.toLowerCase() == "about") {
      //render about page
      return <About />;
    } else if (title.toLowerCase() == "contact") {
      //render contact page
      return <Contact />;
    } else if (title.toLowerCase() == "project") {
      //render project page
      return <Project id={this.props.match.params.id} />;
    } else {
      //render not found
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <MainNav pageTitle={this.props.pageTitle} />
        <main>{this.getPage(this.props.pageTitle)}</main>
        <footer>&copy; Tim D'hoore </footer>
      </div>
    );
  }
}
