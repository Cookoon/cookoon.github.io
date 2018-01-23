import React from 'react';
import Helmet from 'react-helmet';

import Banner from '../components/Banner';

const TermsPage = () => (
  <div>
    <Helmet title="Conditions générales" />

    <Banner>
      <h1 className="h4 font-weight-light mb-4">Conditions générales</h1>
    </Banner>
  </div>
);

export default TermsPage;
