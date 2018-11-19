import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const BusinessPresentationPage = () => (
  <div>
    <Helmet title="For Buisness" />

    <div className="container">
      <iframe
        className="white-paper mt-3 mb-3"
        src="https://drive.google.com/file/d/1C1h5YUe6LQUIs5iue5rzVYZ1-CTehGXk/preview"
        frameBorder="0"
      />
    </div>
  </div>
);

export default BusinessPresentationPage;