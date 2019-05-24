import PropTypes from "prop-types"
import React from "react"
import { slide as Menu } from 'react-burger-menu'
import { Link } from "gatsby"

const ListLink = props => (
    <li style={{listStyle: `none`, alignContent: `center`, fontFamily: `Source Sans Pro,sans-serif`, padding: `1em`, color: `#FB9985`}}>
      <Link style={{color: `#FB9985`}} activeStyle={{fontFamily: `Montserrat,sans-serif`, color: `#ffc98b`}} to={props.to}>{props.children}</Link>
    </li>
  )


const Sidebar = ({ siteTitle }) => (
    <Menu>
        <ListLink activeStyle={{color: `#ffc98b`, fontFamily: `Montserrat,sans-serif`}} to="/">about</ListLink>
        <ListLink activeStyle={{color: `#ffc98b`, fontFamily: `Montserrat,sans-serif`}} to="/portfolio/">portfolio</ListLink>
        <ListLink activeStyle={{color: `#ffc98b`, fontFamily: `Montserrat,sans-serif`}} to="/contacts/">contacts</ListLink>
        <a style={{ padding: `1em`, color: `#ffc98b`, fontFamily: `Source Sans Pro,sans-serif`, fontWeight: `600`}}href="https://bit.ly/2K2slVg"><b>résumé.</b></a>
    </Menu>
)

Sidebar.propTypes = {
    siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
    siteTitle: ``,
}

Sidebar.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Sidebar