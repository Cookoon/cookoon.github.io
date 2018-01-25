import React from 'react';
import Helmet from 'react-helmet';

import Banner from '../components/Banner';
import logoAxa from '../images/logoAxa.png';

const InsurancePage = () => (
  <div>
    <Helmet title="Garanties" />

    <Banner>
      <h1 className="h4 font-weight-light mb-4">
        Votre assurance incluse à chaque location
      </h1>
      <div className="d-flex justify-content-center justify-content-md-start align-items-end">
        <p className="small mb-2 mr-2">en partenariat avec </p>
        <img src={logoAxa} alt="Axa" className="w-6r" />
      </div>
    </Banner>
  </div>
);

export default InsurancePage;
