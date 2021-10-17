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
    linkOuter: `flex h-full items-center`,
    navLink: `px-4`,
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0">
        <div className={`max-w-6xl mx-auto flex justify-between items-stretch`}>
          <div>
            <Link to="/">
              <img
                src={LogoImg}
                alt="One Planet Associates logo"
                className="w-16 h-16 m-2"
              />
            </Link>
          </div>
          <nav className={`flex justify-between items-stretch`}>
            <ul className={`hidden md:flex items-center`}>
              <li className={classes.linkOuter}>
                <Link to={`/services`} className={classes.navLink}>
                  services
                </Link>
              </li>
              <li
                className={`relative down-chev nav-trigger cursor-pointer ${classes.linkOuter}`}
              >
                <button className={classes.navLink}>projects</button>
                <ul className={`nav-dropdown`}>
                  {projects.map((each, i) => (
                    <li key={each.slug + `-` + i}>
                      <Link to={each.slug}>{each.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={classes.linkOuter}>
                <Link to={`/about`} className={classes.navLink}>
                  about
                </Link>
              </li>
              <li className={classes.linkOuter}>
                <Link to={`/contact`} className={classes.navLink}>
                  contact
                </Link>
              </li>
            </ul>
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden mt-2 hamburger hamburger--squeeze relative ${
              isOpen && "is-active"
            }`}
            type="button"
            aria-label="Toggle Menu"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </header>
      <nav
        className={`mobile-nav ${
          isOpen && "is-open shadow-lg"
        } z-10 flex flex-col text-center bg-white pt-2 pb-8`}
      >
        <ul className={``}>
          <li className={classes.linkOuter}>
            <Link to={`/services`} className={classes.navLink}>
              services
            </Link>
          </li>
          <li
            className={`relative down-chev nav-trigger cursor-pointer ${classes.linkOuter}`}
          >
            <button className={classes.navLink}>projects</button>
            <ul className={`nav-dropdown`}>
              {projects.map((each, i) => (
                <li key={each.slug + `-` + i}>
                  <Link to={each.slug}>{each.title}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li className={classes.linkOuter}>
            <Link to={`/about`} className={classes.navLink}>
              about
            </Link>
          </li>
          <li className={classes.linkOuter}>
            <Link to={`/contact`} className={classes.navLink}>
              contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`overlay ${isOpen && "is-active"}`} />
    </>
  )
}

export default Header
