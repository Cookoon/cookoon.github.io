import React from 'react';
import Link from 'gatsby-link';
import logo from '../../images/logo-black-small.png';
import './cookoon-nav.scss';

const CookoonNav = () => (
  <div className='container'>
    <nav className='cookoon-nav'>
      <div className='cookoon-nav-logo-block'>
        <Link to="/">
          <img alt="Cookoon" src={logo} />
        </Link>
        <a href='/#experience'>
          <p>L'experience</p>
        </a>
        <a href="/#reseau">
          <p>Le réseau</p>
        </a>
      </div>
      <div className='cookoon-nav-business d-none d-md-block'>
        <a href="https://app.cookoon.fr/pro" target='_blank'>
          <p>Cookoon for Business</p>
        </a>  
      </div>
    </nav>
  </div>
);

export default CookoonNav;
