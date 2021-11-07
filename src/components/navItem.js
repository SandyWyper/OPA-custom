import React from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"

const NavItem = ({ children, path, screen }) => (
  <li className={screen === "desktop" ? `flex h-full items-center` : ``}>
    <Link to={path} className={`px-4`}>
      {children}
    </Link>
  </li>
)

export default NavItem
