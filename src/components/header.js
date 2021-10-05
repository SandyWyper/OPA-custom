import React, { useState } from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import useScrollPosition from "../lib/useScrollPosition"
import LogoImg from "../images/OPA.png"
// import { useSpring, animated } from "react-spring"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allContentfulProject {
          nodes {
            slug
            title
          }
        }
      }
    `
  )
  const projects = data.allContentfulProject.nodes
  // Mobile nav open or not state
  const [isOpen, setIsOpen] = useState(false)
  const [isScrollTop, setIsScrollTop] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const pos = currPos.y > -60 || currPos.y > prevPos.y
      if (pos !== isScrollTop) setIsScrollTop(pos)
    },
    [isScrollTop],
    undefined,
    undefined,
    100
  )

  const classes = {
    linkOuter: `h-full items-center flex`,
    navLink: `px-4`,
  }
  return (
    <header>
      <div className={`max-w-6xl mx-auto flex justify-between`}>
        <div>
          <Link to="/">
            <img
              src={LogoImg}
              alt="One Planet Associates logo"
              className="w-16 h-16 m-2"
            />
          </Link>
        </div>
        <div className={`flex`}>
          <h3 className={classes.linkOuter}>
            <Link to={`/services`} className={classes.navLink}>
              services
            </Link>
          </h3>
          <div
            className={`relative nav-trigger cursor-pointer ${classes.linkOuter}`}
          >
            <h3 className={classes.navLink}>projects</h3>
            <ul className={`nav-dropdown`}>
              {projects.map((each, i) => (
                <li key={each.slug + `-` + i}>
                  <Link to={each.slug}>{each.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <h3 className={classes.linkOuter}>
            <Link to={`/about`} className={classes.navLink}>
              about
            </Link>
          </h3>
          <h3 className={classes.linkOuter}>
            <Link to={`/contact`} className={classes.navLink}>
              contact
            </Link>
          </h3>
        </div>
      </div>
    </header>
  )
}

export default Header
