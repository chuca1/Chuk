import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  render() {
    const show = this.state.menu ? "show" : "";

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <Link to="/">
          <span className="navbar-brand">Chuca</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.toggleMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={"collapse navbar-collapse justify-content-end " + show}>
          <div className="navbar-nav sticky-top">
            <Link to="/archivments" style={{ textDecoration: "none" }}>
              <span className="nav-item nav-link">Archivments</span>
            </Link>
            <Link to="/works" style={{ textDecoration: "none" }}>
              <span className="nav-item nav-link">Works</span>
            </Link>
            {/* <Link to="/aboutme" style={{ textDecoration: "none" }}>
              <span className="nav-item nav-link">About me</span>
            </Link> */}
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <span className="nav-item nav-link">Contact</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
