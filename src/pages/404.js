import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const NotFoundPage = () => (
  <div>
    <Helmet title="La page est introuvable" />

    <div className="container-fluid bg-primary h-100vh d-flex flex-column justify-content-center align-items-center text-center text-white display-1">
      <i className="co co-reversed-sad pb-4" aria-hidden="true" />
      <p className="h1">Oups,</p>
      <h1 className="h2 pb-4">
        Cette page n'existe pas, ou elle a été déplacée.
      </h1>
      <Link to="/" className="btn btn-lg btn-light px-5 text-uppercase">
        Revenir à l'accueil
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
