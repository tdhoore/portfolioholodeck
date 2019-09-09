import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MainNav extends Component {
    render(){
        return (
            <header className="mainHeader">
                <h1>Tim D'hoore - {this.props.pageTitle}</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Work</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pageTitle: state.pageTitle
    };
};

export default connect(mapStateToProps)(MainNav);