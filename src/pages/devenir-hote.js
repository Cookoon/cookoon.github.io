import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const HostPage = () => (
  <div>
    <Helmet title="Devenir hôte" />

    <h1>Devenir hôte</h1>
    <Link to="/">Accueil</Link>
  </div>
);

export default HostPage;
