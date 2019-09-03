module.exports = {
  siteMetadata: {
    name: 'Cookoon',
    title: "Réceptions d’exception",
    description: 'Vos repas d’exception chez un particulier',
    fbAppId: '186829152103890',
    keywords: `cookoon, communauté, communaute, sélective,
    selective, recevoir, partager, réceptions, receptions, exception`,
    siteUrl: 'https://cookoon.fr',
    twitter: '@cookoon'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/favicon.jpg',
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
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-97725621-1',
        head: true
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
