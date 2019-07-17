import React from 'react';
import Helmet from 'react-helmet';
import Layout from "../components/layout";

const BusinessPresentationPage = () => (
  <Layout>
    <Helmet title="For Business" />

    <div className="container">
      <iframe
        className="white-paper mt-3 mb-3"
        src="https://drive.google.com/file/d/1k8rzKX-yjMAi7lwRAOW4YCFCOMgv_dum/preview"
        frameBorder="0"
      />
    </div>
  </Layout>
);

export default BusinessPresentationPage;
