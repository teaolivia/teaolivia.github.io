/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
//import TransitionLink from 'gatsby-plugin-transition-link'

import Header from "./header"
import "./layout.css"
import Sidebar from "./sidebar";
// import { getAutomaticTypeDirectiveNames } from "typescript";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
          <div class="footer-class">
            <Header menuLinks={data.site.siteMetadata.menuLinks} />
          </div> 
        <div className="sidebar">
          <Sidebar /> 
        </div>
          <div class="main-container"
            style={{
              display: `table-cell`,
              verticalAlign: `middle`,
              margin: `3em auto`,
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: `100%`,
              maxHeight: `100%`,
              padding: `2rem 1.0875rem 0px`,
              paddingTop: 0,
            }}
          >
            <main style={{maxHeight: `100%`, maxWidth: `100%` }}>{children}</main>
            {/* <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer> */}
            
          </div>

        {/* <footer class="footer-class">
        <div id="page-wrap" style={{height: `100%`, marginBottom: `-50px`}}>

          <div style={{height: `50px`}}></div>
        </div>
        </footer> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout