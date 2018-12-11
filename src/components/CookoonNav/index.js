import React from 'react';
import Link from 'gatsby-link';
import logo from '../../images/logo-black-small.png';

const CookoonNav = () => (
  <nav className='cookoon-nav'>
    <div className='cookoon-nav-logo-block'>
      <img alt="Cookoon" src={logo} />
      <p>L'experience</p>
      <p>Le réseau</p>
    </div>
    <div className='cookoon-nav-business d-none d-md-block'>
      <p>Cookoon for Business</p>
    </div>
  </nav>
);

export default CookoonNav;
