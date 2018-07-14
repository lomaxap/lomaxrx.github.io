module.exports = {
  siteMetadata: {
    title: 'Andrew Lomax',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
    {
     resolve: `gatsby-plugin-google-analytics`,
     options: {
       trackingId: "UA-75607625-1"
     }
    },
  ],
}
