import React from 'react';
import Link from 'gatsby-link';

const Footer = () => (
  <footer className="navbar navbar-expand-md navbar-dark bg-dark text-center">
    <div className="container py-4 justify-content-center justify-content-md-between">
      <div className="navbar-text">
        <span className="text-nowrap">® Réceptions Nouvelles 2018</span> ·{' '}
        <span className="text-nowrap">Tous droits réservés</span>
      </div>
      <div className="navbar-nav align-items-center">
        <div className="nav-item px-3">
          <a
            className="nav-link"
            href="https://www.facebook.com/groups/378511112571275"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fa fa-facebook-square fa-2x" aria-hidden="true" />
          </a>
        </div>

        <div className="nav-item px-3">
          <a
            className="nav-link"
            href="https://fr.linkedin.com/company/cookoon"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true" />
          </a>
        </div>

        <div className="nav-item px-3">
          <a
            className="nav-link"
            href="mailto:Concierge Cookoon<concierge@cookoon.fr>"
            target="_blank"
            rel="noreferrer noopener"
          >
            Contact
          </a>
        </div>

        <div className="nav-item px-3">
          <a
            className="nav-link"
            href="mailto:Cookoon<presse@cookoon.fr>"
            target="_blank"
            rel="noreferrer noopener"
          >
            Presse
          </a>
        </div>

        <div className="nav-item px-3">
          <a
            className="nav-link"
            href="https://aide.cookoon.fr"
            target="_blank"
            rel="noreferrer noopener"
          >
            Aide
          </a>
        </div>

        <div className="nav-item px-3 pr-md-0">
          <Link to="/conditions-generales/" className="nav-link">
            Conditions générales
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
