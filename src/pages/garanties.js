import React from 'react';
import Helmet from 'react-helmet';

import Banner from '../components/Banner';

const InsurancePage = () => (
  <div>
    <Helmet title="Garanties" />

    <Banner>
      <h1 className="h4 font-weight-light mb-4">Garanties</h1>
    </Banner>
  </div>
);

export default InsurancePage;
