import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const WhitePaperPage = () => (
  <div>
    <Helmet title="Livre blanc" />

    <div className="container">
      <iframe
        className="white-paper mt-3 mb-3"
        src="https://drive.google.com/file/d/1CM1ZdA3OizqfrLn6Tt-vGS-Bmd-S_YFQ/preview"
      />
    </div>
  </div>
);

export default WhitePaperPage;
