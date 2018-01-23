module.exports = {
  siteMetadata: {
    name: 'Cookoon',
    title:
      'Une communauté exclusive pour organiser vos événements chez les autres',
    description:
      'Une communauté exclusive pour organiser vos événements chez les autres',
    keywords: 'cookoon, communauté, événements',
    url: 'https://cookoon.github.io', // TODO update this before release
    twitter: '@cookoon'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-tagmanager`,
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
    }
  ]
};
