module.exports = {
  siteMetadata: {
    name: 'Cookoon',
    title: 'Recevons partout !',
    description: 'Une communauté exclusive pour recevoir et partager',
    keywords:
      'cookoon, recevons, partout, communauté, exclusive, recevoir, partager',
    siteUrl: 'https://cookoon.github.io', // TODO update this before release
    twitter: '@cookoon'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-P3ZBPZG',
        includeInDevelopment: false
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8
      }
    },
    'gatsby-plugin-sitemap'
  ]
};
