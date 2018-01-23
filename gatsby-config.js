module.exports = {
  siteMetadata: {
    name: 'Cookoon',
    title:
      'Cookoon - Une communauté exclusive pour organiser vos événements chez les autres',
    description:
      'Une communauté exclusive pour organiser vos événements chez les autres',
    url: 'https://cookoon.github.io' // TODO update this before release
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8
      }
    }
  ]
};
