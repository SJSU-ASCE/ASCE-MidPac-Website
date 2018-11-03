module.exports = {
  siteMetadata: {
    title: "ASCE MidPac Website",
    author: "David Tran",
    description: "Official website for the annual ASCE Mid-Pacific Conference."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    //'gatsby-plugin-offline',
  ],
}
