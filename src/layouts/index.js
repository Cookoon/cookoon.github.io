import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../scss/index.scss';
import ogImage from '../images/ogImage.jpg';

const TemplateWrapper = ({ children }) => {
  const title =
    'Cookoon - Une communauté exclusive pour organiser vos événements chez les autres';
  const description =
    'Une communauté exclusive pour organiser vos événements chez les autres';

  return (
    <div>
      <Helmet
        htmlAttributes={{ lang: 'fr' }}
        titleTemplate="Cookoon - %s"
        defaultTitle={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: 'cookoon, communauté, événements' },
          { name: 'og:type', content: 'website' },
          { name: 'og:site_name', content: 'Cookoon' },
          { name: 'og:url', content: 'https://www.cookoon.fr' },
          { name: 'og:title', content: title },
          { name: 'og:description', content: description },
          { name: 'og:image', content: ogImage },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: 'Cookoon' },
          { name: 'twitter:creator', content: '@cookoon' },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image:src', content: ogImage }
        ]}
      />

      <div>{children()}</div>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
