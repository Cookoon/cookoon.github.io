import React from 'react';
import Helmet from 'react-helmet';
import Layout from "../components/layout";

const PrivacyPolicyPage = () => (
  <Layout>
    <Helmet title="Politique de confidentialité Cookoon" />

    <div className="container">
      <iframe
        className="white-paper mt-3 mb-3"
        src="https://drive.google.com/file/d/14ix4McDIH-r4gADq8OPSc2PZdn4DD8yE/preview"
        frameBorder="0"
      />
    </div>
  </Layout>
);

export default PrivacyPolicyPage;
