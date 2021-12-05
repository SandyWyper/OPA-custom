require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `OPA`,
    description: `OPA provides planning and consultancy services for domestic and commercial clients.`,
    author: `Tinderbox Web Solutions`,
    siteUrl: `https://oneplanetassociates.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-next-seo",
      options: {
        dangerouslySetAllPagesToNoIndex:
          process.env.DEPLOY_CONTEXT === "preview" ? true : false,
        dangerouslySetAllPagesToNoFollow:
          process.env.DEPLOY_CONTEXT === "preview" ? true : false,
        description: `OPA provides planning and consultancy services for domestic and commercial clients.`,
        openGraph: {
          type: "website",
          locale: "en_GB",
          url: "https://oneplanetassociates.com/",
          site_name: "One Planet Associates",
          images: [{ url: "XXXXXXXXXXXXXXX", alt: "XXXXXXXXXXXXX" }],
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          quality: 90,
          placeholder: "blurred",
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5r75315xy7m1`,
        accessToken: process.env.CONTENTFUL_API_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Poppins:300,500,600"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#eaeaea`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/OPA.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
