import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  state = {
    isActive: false,
  };

  toggleNav = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    return (
      <nav
        className="navbar is-fixed-top is-inline-block"
        aria-label="main navigation"
        style={{
          backgroundColor: "rgb(242, 237, 245)",
        }}
      >
        <div className="float-left">
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div
          className={
            this.state.isActive ? "navbar-menu is-active" : "navbar-menu"
          }
        >
          <div className="navbar-start">
            <NavLink className="navbar-item" to="/">
              Home
            </NavLink>
            <NavLink
              className="navbar-item"
              to="/blog"
              activeClassName="is-active"
            >
              <span
                className="icon has-text-primary"
                style={{ marginRight: 5 }}
              >
                <i className="fas fa-code"></i>
              </span>
              Code Blog
            </NavLink>
            <a href="https://medium.com/@alagrin" className="navbar-item">
              <span className="icon" style={{ marginRight: 5 }}>
                <i className="fab fa-lg fa-medium"></i>
              </span>
              Medium
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">Projects</div>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="https://alangrinberg.net">
                  Main Site
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/">
                  Overview pending
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <NavLink className="navbar-item" to="/contact">
              Contact
            </NavLink>
            <a className="navbar-item" href="https://github.com/alagrin">
              <span className="icon">
                <i className="fab fa-lg fa-github"></i>
              </span>
            </a>
            <a
              className="navbar-item"
              href="https://linkedin.com/in/alan-grinberg"
            >
              <span className="icon has-text-info" style={{ color: "#0084FF" }}>
                <i className="fab fa-lg fa-linkedin"></i>
              </span>
            </a>
            <a
              className="navbar-item"
              href="https://drive.google.com/open?id=1Tz5VE5hEM5lwZbauX1hLjDfaXf83XT9I"
            >
              Resume
              <span
                className="icon"
                style={{ color: "#0077B5", marginLeft: 5 }}
              >
                <i className="fas fa-lg fa-file"></i>
              </span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
