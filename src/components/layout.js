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
        <div className="outer-container">
          <div 
            style={{
              display: `table-cell`,
              verticalAlign: `middle`,
              margin: `auto auto auto auto`,
              width: 960,
              height: 700,
              maxWidth: 960,
              padding: `2rem 1.0875rem 0px`,
              paddingTop: 0,
            }}
          >
            <main>{children}</main>
            {/* <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer> */}
            
          </div>
          <div style={{position:`absolute`, bottom: 0}} className="inner-container">
            <Header menuLinks={data.site.siteMetadata.menuLinks} />
          </div>  
        </div>  
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
