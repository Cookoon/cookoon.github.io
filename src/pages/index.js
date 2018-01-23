import React from 'react';
import Link from 'gatsby-link';

import Banner from '../components/Banner';
import logo from '../images/logo.png';
import appStoreBadge from '../images/appStoreBadge.png';
import googlePlayBadge from '../images/googlePlayBadge.png';

const IndexPage = () => (
  <div>
    <Banner>
      <h1 className="mb-4">
        <img alt="Cookoon" src={logo} />
      </h1>
      <p className="h4 font-weight-light mb-4">
        Une communauté exclusive pour
        <br />organiser vos événements chez les autres
      </p>
      <div className="store-badge">
        <a
          href="https://itunes.apple.com/fr/app/cookoon-inside/id1291943406"
          target="_blank"
          rel="noreferrer noopener"
          className="d-inline-block mx-1 ml-md-0 mr-md-3 my-2"
        >
          <img alt="App Store" src={appStoreBadge} />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=cookoon.cookoonandroid"
          target="_blank"
          rel="noreferrer noopener"
          className="d-inline-block mx-1 ml-md-0 mr-md-3 my-2"
        >
          <img alt="Google Play" src={googlePlayBadge} />
        </a>
      </div>
    </Banner>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;
