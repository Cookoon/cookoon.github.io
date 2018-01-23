import React from 'react';
import Helmet from 'react-helmet';

import Banner from '../components/Banner';

const HostPage = () => (
  <div>
    <Helmet title="Devenir hôte" />

    <Banner>
      <h1 className="h4 font-weight-light mb-4">Devenir hôte</h1>
    </Banner>
  </div>
);

export default HostPage;
