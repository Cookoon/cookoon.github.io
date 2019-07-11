import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import CookoonNav from '../components/CookoonNav';
import Footer from '../components/Footer';

import ogImage from '../images/og_image.png';
import ogImageSquare from '../images/ogImageSquare.jpg';


export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
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
    `}
    render={data => (
      <>
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
            { property: 'og:type', content: 'website' },
            { property: 'og:site_name', content: data.site.siteMetadata.name },
            { property: 'og:url', content: data.site.siteMetadata.siteUrl },
            { property: 'og:title', content: data.site.siteMetadata.title },
            { property: 'og:description', content: data.site.siteMetadata.description },
            { property: 'og:image', content: data.site.siteMetadata.siteUrl + ogImage },
            { property: 'og:image:width', content: '2400' },
            { property: 'og:image:height', content: '1260' },
            { property: 'og:image', content: data.site.siteMetadata.siteUrl + ogImageSquare },
            { property: 'og:image:width', content: '600' },
            { property: 'og:image:height', content: '600' },
            { property: 'fb:app_id', content: data.site.siteMetadata.fbAppId },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: data.site.siteMetadata.name },
            { name: 'twitter:creator', content: data.site.siteMetadata.twitter },
            { name: 'twitter:title', content: data.site.siteMetadata.title },
            { name: 'twitter:description', content: data.site.siteMetadata.description },
            { name: 'twitter:image', content: data.site.siteMetadata.siteUrl + ogImage }
          ]}
        />

        <CookoonNav />
        {children}
        <Footer />
      </>
    )}
  />
)
