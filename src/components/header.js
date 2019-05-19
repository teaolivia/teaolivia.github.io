import { Link } from "gatsby"
//import TransitionLink from 'gatsby-plugin-transition-link'
import PropTypes from "prop-types"
import React from "react"

const Header = ({ menuLinks }) => (
  <nav>
    <ul style={{ display: 'flex', flex: 1, listStyle: 'none', marginLeft: `auto` }}>
      {menuLinks.map(link =>
        <li div="navbar" key={link.link}>
          <Link activeClassName="nav-style"
            activeStyle = {{
              color: `#ffc98b`
            }}
            style = {{
              color: `#1C3A13`,
              padding: '1.5rem',
              fontFamily: 'Quattrocento Sans', 
              fontWeight: '700', 
              textDecoration: 0,
              }}
            to = {link.link}>{link.name}
          </Link>
        </li>
      )}
    </ul>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
