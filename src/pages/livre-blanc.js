import React from 'react';
import Helmet from 'react-helmet';
import Layout from "../components/layout";

const WhitePaperPage = () => (
  <Layout>
    <Helmet title="Livre blanc" />

    <div className="container">
      <iframe
        className="white-paper mt-3 mb-3"
        src="https://drive.google.com/file/d/11h2Ox7iVJ7rWh9xEy4FezA6k2A2Ux34m/preview"
        frameBorder="0"
      />
    </div>
  </Layout>
);

export default WhitePaperPage;
