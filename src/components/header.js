import { Link } from "gatsby"
//import TransitionLink from 'gatsby-plugin-transition-link'
import PropTypes from "prop-types"
import React from "react"

const Header = ({ menuLinks }) => (
  <div id="page-wrap" style={{
      justifyContent: `center`, 
      float:`right`,
      paddingTop: `0 1.45rem `
    }}>
      <nav>
        <ul style={{ 
          display: 'flex', 
          flex: 2, 
          listStyle: 'none', 
          }}>
          {menuLinks.map(link =>
            <li div="navbar" key={link.link}>
              <Link activeClassName="nav-style"
                activeStyle = {{
                  color: `#ffc98b`
                }}
                style = {{
                  color: `#1A090D`,
                  padding: '2rem',
                  fontFamily: 'Montserrat', 
                  fontWeight: 'Medium', 
                  textDecoration: 0,
                  }}
                to = {link.link}>{link.name}
              </Link>
            </li>
          )}
        </ul>
      </nav>
  
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
