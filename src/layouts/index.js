import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import CookoonNav from '../components/CookoonNav';
import Footer from '../components/Footer';
// import '../styles/index.scss';
import ogImage from '../images/og_image.png';
import ogImageSquare from '../images/ogImageSquare.jpg';

class TemplateWrapper extends Component {
  render() {
    const {
      name,
      title,
      description,
      fbAppId,
      keywords,
      siteUrl,
      twitter
    } = this.props.data.site.siteMetadata;

    const nameAndTitle = `${name} · ${title}`;

    const ogImageUrl =
      process.env.NODE_ENV === 'production' ? siteUrl + ogImage : ogImage;
    const ogImageSquareUrl =
      process.env.NODE_ENV === 'production'
        ? siteUrl + ogImageSquare
        : ogImageSquare;

    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: 'fr' }}
          titleTemplate={`${name} · %s`}
          defaultTitle={nameAndTitle}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
            { property: 'og:type', content: 'website' },
            { property: 'og:site_name', content: name },
            { property: 'og:url', content: siteUrl },
            { property: 'og:title', content: nameAndTitle },
            { property: 'og:description', content: description },
            { property: 'og:image', content: ogImageUrl },
            { property: 'og:image:width', content: '2400' },
            { property: 'og:image:height', content: '1260' },
            { property: 'og:image', content: ogImageSquareUrl },
            { property: 'og:image:width', content: '600' },
            { property: 'og:image:height', content: '600' },
            { property: 'fb:app_id', content: fbAppId },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: name },
            { name: 'twitter:creator', content: twitter },
            { name: 'twitter:title', content: nameAndTitle },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: ogImageUrl }
          ]}
        />
        <CookoonNav pathname={this.props.location.pathname} />

        <main>{this.props.children()}</main>

        <Footer />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query SiteMetadataLookup {
    site {
      siteMetadata {
        name
        title
        description
        fbAppId
        keywords
        siteUrl
        twitter
      }
    }
  }
`;
