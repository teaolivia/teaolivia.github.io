module.exports = {
  siteMetadata: {
    title: `Thea Olivia`,
    description: `My Portfolio Website`,
    author: `@theaolivia`,
    menuLinks: [
      {
          name: 'home',
          link: '/'
      },
      {
          name: 'portfolio',
          link: '/portfolio'
      },
      {
        name: 'contact',
        link: '/contacts'
      },
    ]
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-offline',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#7E5920`,
        theme_color: `#7E5920`,
        display: `minimal-ui`,
        icon: `src/images/halloween-black-cat.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-transition-link`,
    {
     resolve: `gatsby-plugin-typography`,
     options: {
       pathToConfigModule: `src/utils/typography`,
     }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Droid Sans', 'Droid Serif']
        }
      }
    }
    // {
    //   resolve: 'gatsby-remark-video',
    //   options: {
    //     plugins: [
    //       options: {
    //         "gatsby-remark-responsive-iframe",
    //         width: 100%,
    //         height: 'auto',
    //         preload: 'auto',
    //         muted: true,
    //         autoplay: true
    //       }
    //     ]
    //   }
    // }
  ],
}
