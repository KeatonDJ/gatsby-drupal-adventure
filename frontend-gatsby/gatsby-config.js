require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

if (process.env.NODE_ENV === "development") {
  process.env.ENABLE_GATSBY_REFRESH_ENDPOINT=true;
}

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby Drupal Adventure",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-drupal",
      options: {
        baseUrl: process.env.drupalBaseUrl || "http://gatsby-drupal-adventure.lndo.site/",
        fastBuilds: true,
      },
    },
  ],
};

