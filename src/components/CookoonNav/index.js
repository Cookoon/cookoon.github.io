import React, { Component } from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';
import onClickOutside from 'react-onclickoutside';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

class CookoonNav extends Component {
  state = {
    isOpen: false,
    isTop: true
  };

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  toggleNavbar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  closeNavbar = () => {
    this.setState({ isOpen: false });
  };

  handleClickOutside = this.closeNavbar;

  handleScroll = () => {
    const isTop = window.scrollY < 30;
    if (isTop !== this.state.isTop) {
      this.setState({ isTop });
    }
  };

  classes = () =>
    classNames('cookoon-nav', {
      'cookoon-nav-simple': [
        '/conditions-generales',
        '/conditions-generales/',
        '/livre-blanc',
        '/livre-blanc/',
        '/presentation-for-business',
        '/presentation-for-business/'
      ].includes(this.props.pathname),
      'cookoon-nav-top': this.state.isTop,
      'cookoon-nav-opened': this.state.isOpen
    });

  render() {
    return (
      <div className={this.classes()}>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarBrand href="/" onClick={this.closeNavbar}>
              <i className="co co-logo fa-3x" aria-hidden="true" />
            </NavbarBrand>
            <button className="navbar-toggler" onClick={this.toggleNavbar}>
              <span className="navbar-toggler-icon" />
            </button>
            <Collapse
              isOpen={this.state.isOpen}
              onClick={this.closeNavbar}
              navbar
            >
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
                <NavItem className="px-3">
                  <Link
                    to="/livre-blanc/"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Livre Blanc
                  </Link>
                </NavItem>
                <NavItem className="px-3">
                  <a href="https://app.cookoon.fr/pro" className='nav-link' target='_blank'>
                    Cookoon for Business <i className="fa fa-sign-in"></i>
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default onClickOutside(CookoonNav);
