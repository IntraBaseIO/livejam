module.exports = {
  siteMetadata: {
    title: `Livejam.io`,
    description: `Join fellow tech makers for live jam session on Twitch, Youtube and other channels. Interact in real time, explore new topics and watch how others would troubleshoot a problem..`,
    author: `Mike und Sebastian`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-source-modular-graphql",
      options: {
        path: "./graphql",
        schemaModules: ["events", "users"]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `graphql`,
        path: `${__dirname}/graphql`
      }
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        pathToTheme: "src/utils/theme.js"
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.BucketName || "stub-for-gatsby-build",
        protocol: "https",
        hostname: "www.livejam.io",
        params: {}
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-136298216-1",
        anonymize: true,
        respectDNT: true,
        cookieDomain: "livejam.io"
      }
    }
  ]
};
