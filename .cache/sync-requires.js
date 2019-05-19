const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/theaolivia/projects/theaolivia/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/theaolivia/projects/theaolivia/src/pages/404.js"))),
  "component---src-pages-contacts-js": hot(preferDefault(require("/Users/theaolivia/projects/theaolivia/src/pages/contacts.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/theaolivia/projects/theaolivia/src/pages/index.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("/Users/theaolivia/projects/theaolivia/src/pages/portfolio.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("/Users/theaolivia/projects/theaolivia/src/pages/resume.js")))
}

