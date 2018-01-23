import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../scss/index.scss';
import ogImage from '../images/ogImage.jpg';

class TemplateWrapper extends Component {
  render() {
    const { name, title, description, url } = this.props.data.site.siteMetadata;

    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: 'fr' }}
          titleTemplate={`${name} - %s`}
          defaultTitle={title}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: 'cookoon, communauté, événements' },
            { name: 'og:type', content: 'website' },
            { name: 'og:site_name', content: name },
            { name: 'og:url', content: url },
            { name: 'og:title', content: title },
            { name: 'og:description', content: description },
            { name: 'og:image', content: url + ogImage },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: name },
            { name: 'twitter:creator', content: '@cookoon' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image:src', content: url + ogImage }
          ]}
        />

        <div>{this.props.children()}</div>
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
        url
      }
    }
  }
`;
