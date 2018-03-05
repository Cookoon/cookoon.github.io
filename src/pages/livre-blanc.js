import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const WhitePaperPage = () => (
  <div>
    <Helmet title="Livre blanc" />

    <div className="container">
      <iframe
        className="white-paper mt-3 mb-3"
        src="https://drive.google.com/file/d/11h2Ox7iVJ7rWh9xEy4FezA6k2A2Ux34m/preview"
      />
    </div>
  </div>
);

export default WhitePaperPage;
