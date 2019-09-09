import React, { Component } from "react";
import MainNav from "../components/MainNav.jsx";

export default class Page extends Component {
    render() {
        return <div>
            <MainNav pageTitle={this.props.pageTitle}/>
        </div>;
    }
}
