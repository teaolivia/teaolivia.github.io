require("dotenv").config()

module.exports = {
  siteMetadata: {
      title: `Thea Yusuf`,
    siteUrl: `https://theayusuf.com`
  },
  plugins: ["gatsby-plugin-image", 
            "gatsby-plugin-react-helmet", 
            "gatsby-plugin-sitemap", 
            "gatsby-plugin-styled-components", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "files",
      "path": "./src/files/"
    },
    __key: "files"
  },
  {
    resolve: 'gatsby-plugin-pdf',
    options: {
      paths: ['/', '/resume'],
      outputPath: '/public/exports',
    },
  },
  {
    resolve: "gatsby-plugin-web-font-loader",
    options: {
      typekit: {
        id: process.env.TYPEKIT_ID,
      },
    },
  }]
};