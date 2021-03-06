module.exports = {
  siteMetadata: {
    title: `Simon Van den Broeck`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Simon Van den Broeck',
        short_name: 'Simon VDB',
      },
    },
    // In your gatsby-config.js
    // This plugin generates a service worker and AppShell
    // html file so the site works offline and is otherwise
    // resistant to bad networks. Works with almost any
    // site!
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    // This plugin exposes helper functions for processing
    // images with the NPM package “sharp”. It's used by
    // several other plugins.
    `gatsby-plugin-sharp`,
    // This plugin identifies file nodes that are images and
    // transforms these to create new “ImageSharp” nodes.
    // With them you can resize images and
    // generate responsive image thumbnails.
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,

    // Expose `/data` to graphQL layer
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
    // Parse JSON files
    `gatsby-transformer-json`,
  ],
}
