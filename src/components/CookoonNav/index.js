import React, { Component } from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import logo from './logo-cookoon-white.png';

class CookoonNav extends Component {
  state = {
    isOpen: false,
    isTop: true
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  handleScroll = () => {
    const isTop = window.scrollY < 30;
    if (isTop !== this.state.isTop) {
      this.setState({ isTop });
    }
  };
  classes = () => {
    return classNames('cookoon-nav', {
      'cookoon-nav-top': this.state.isTop,
      'cookoon-nav-scrolled': !this.state.isTop,
      'cookoon-nav-opened': this.state.isOpen
    });
  };
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }
  render() {
    return (
      <div className={this.classes()}>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarBrand href="/">
              <img src={logo} alt="Logo" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/etre-membre/">Être Membre</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/devenir-hote/">Devenir Hôte</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/garanties/">Garanties</NavLink>
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
