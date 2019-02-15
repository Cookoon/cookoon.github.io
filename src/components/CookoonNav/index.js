import React from 'react';
import Link from 'gatsby-link';
import BusinessModal from '../BusinessModal';

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
          <p>L'expérience</p>
        </a>
        <a href="/#reseau">
          <p>Le réseau</p>
        </a>
      </div>
      <div className='cookoon-nav-business d-none d-md-block'>
        <BusinessModal/>
      </div>
    </nav>
  </div>
);

export default CookoonNav;
