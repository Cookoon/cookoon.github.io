import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const MemberPage = () => (
  <div>
    <Helmet title="Etre membre" />

    <h1>Etre membre</h1>
    <Link to="/">Accueil</Link>
  </div>
);

export default MemberPage;
