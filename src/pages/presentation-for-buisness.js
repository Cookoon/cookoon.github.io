import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const BuisnessPresentationPage = () => (
  <div>
    <Helmet title="For Buisness" />

    <div className="container">
      <iframe
        className="white-paper mt-3 mb-3"
        src="https://drive.google.com/file/d/1Wll315GYu-4lkiHThLSmRxPfnxzL2emB/preview"
        frameBorder="0"
      />
    </div>
  </div>
);

export default BuisnessPresentationPage;