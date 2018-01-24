import React from 'react';
import Link from 'gatsby-link';

const Footer = () => (
  <footer className="navbar navbar-expand-md navbar-dark bg-dark text-center">
    <div className="container justify-content-center justify-content-md-between">
      <div className="navbar-text">
        <span className="text-nowrap">® Réceptions Nouvelles 2018</span> ·{' '}
        <span className="text-nowrap">Tous droits réservés</span>
      </div>
      <div className="navbar-nav">
        <a
          className="nav-item nav-link"
          href="mailto:Concierge Cookoon<concierge@cookoon.fr>"
          target="_blank"
          rel="noreferrer noopener"
        >
          Contact
        </a>
        <a
          className="nav-item nav-link"
          href="mailto:presse@cookoon.fr"
          target="_blank"
          rel="noreferrer noopener"
        >
          Presse
        </a>
        <a
          className="nav-item nav-link"
          href="https://aide.cookoon.fr"
          target="_blank"
          rel="noreferrer noopener"
        >
          Aide
        </a>
        <Link to="/conditions-generales/" className="nav-item nav-link">
          Conditions générales
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
