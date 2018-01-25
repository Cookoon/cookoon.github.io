import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import CookoonNav from '../components/CookoonNav';
import Footer from '../components/Footer';
import '../styles/index.scss';
import ogImage from '../images/ogImage.jpg';

class TemplateWrapper extends Component {
  render() {
    const {
      name,
      title,
      description,
      keywords,
      siteUrl,
      twitter
    } = this.props.data.site.siteMetadata;

    const nameAndTitle = `${name} · ${title}`;

    const ogImageUrl =
      process.env.NODE_ENV === 'production' ? siteUrl + ogImage : ogImage;

    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: 'fr' }}
          titleTemplate={`${name} · %s`}
          defaultTitle={nameAndTitle}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
            { name: 'og:type', content: 'website' },
            { name: 'og:site_name', content: name },
            { name: 'og:url', content: siteUrl },
            { name: 'og:title', content: nameAndTitle },
            { name: 'og:description', content: description },
            { name: 'og:image', content: ogImageUrl },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: name },
            { name: 'twitter:creator', content: twitter },
            { name: 'twitter:title', content: nameAndTitle },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image:src', content: ogImageUrl }
          ]}
        />
        <CookoonNav />

        <div className="content">{this.props.children()}</div>

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
        keywords
        siteUrl
        twitter
      }
    }
  }
`;
