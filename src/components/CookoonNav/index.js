import React, { Component } from "react";
import Link from "gatsby-link";
import classNames from "classnames";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

class CookoonNav extends Component {
  state = {
    isOpen: false,
    isTop: true
  };

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  closeOnNav = () => {
    this.setState({ isOpen: false });
  };

  handleScroll = () => {
    const isTop = window.scrollY < 30;
    if (isTop !== this.state.isTop) {
      this.setState({ isTop });
    }
  };

  classes = () =>
    classNames("cookoon-nav", {
      "cookoon-nav-top": this.state.isTop,
      "cookoon-nav-scrolled": !this.state.isTop,
      "cookoon-nav-opened": this.state.isOpen
    });

  render() {
    return (
      <div className={this.classes()} onBlur={this.closeOnNav}>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarBrand href="/">
              <i className="co co-logo fa-3x" aria-hidden="true" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem className="px-3">
                  <Link
                    to="/etre-membre/"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Être Membre
                  </Link>
                </NavItem>
                <NavItem className="px-3">
                  <Link
                    to="/devenir-hote/"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Devenir Hôte
                  </Link>
                </NavItem>
                <NavItem className="px-3">
                  <Link
                    to="/garanties/"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Garanties
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default CookoonNav;
