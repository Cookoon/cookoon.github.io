import React from 'react';
import Helmet from 'react-helmet';

import Banner from '../components/Banner';

const MemberPage = () => (
  <div>
    <Helmet title="Etre membre" />

    <Banner>
      <h1 className="h4 font-weight-light mb-4">
        Nos membres louent des Cookoon en 3 minutes et tous les jours pour tous
        leurs événements.
      </h1>
      <p className="h4 font-weight-light">
        Et vous, pourquoi allez-vous louer un Cookoon ?
      </p>
    </Banner>
  </div>
);

export default MemberPage;
