import React from 'react';
import Link from 'gatsby-link';
import logo from '../../images/logo-black-small.png';

const CookoonNav = () => (
  <nav className='cookoon-nav'>
    <div className='cookoon-nav-logo-block'>
      <Link to="/">
        <img alt="Cookoon" src={logo} />
      </Link>
      <Link to="/#experience">
        <p>L'experience</p>
      </Link>
      <Link to="/#reseau">
        <p>Le réseau</p>
      </Link>
    </div>
    <div className='cookoon-nav-business d-none d-md-block'>
      <p>Cookoon for Business</p>
    </div>
  </nav>
);

export default CookoonNav;
