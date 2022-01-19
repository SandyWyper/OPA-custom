import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import useScrollPosition from "../lib/useScrollPosition"
import LogoImg from "../images/OPA.png"
// import { useSpring, animated } from "react-spring"
import { toggleMenuCollapse } from "../lib/toggleMenuCollapse"

const NavItem = ({ children, path, screen, classes }) => (
  <li
    className={
      screen === "desktop" ? `flex h-full items-center ml-4 ${classes}` : ``
    }
  >
    <Link to={path} className={`font-semibold text-lg`}>
      {children}
    </Link>
  </li>
)

const Header = ({ links }) => {
  const projects = links.allContentfulProject.nodes
  // Mobile nav open or not state
  const [isOpen, setIsOpen] = useState(false)
  const [isScrollTop, setIsScrollTop] = useState(true)

  useScrollPosition(
    ({ currPos }) => {
      const pos = currPos.y > -220
      if (pos !== isScrollTop) setIsScrollTop(pos)
    },
    [isScrollTop],
    undefined,
    undefined,
    100
  )

  useEffect(() => {
    console.log("is scroll top = ", isScrollTop)
  }, [isScrollTop])

  return (
    <header className={`fixed inset-x-0 top-0 z-50`}>
      <div className={`nav-background ${isScrollTop ? "" : "is-active"}`}>
        <div className={`container mx-auto flex justify-between items-stretch`}>
          <div>
            <Link to="/">
              <img
                src={LogoImg}
                alt="One Planet Associates logo"
                className="w-16 h-16 my-2 md:w-20 md:h-20"
              />
            </Link>
          </div>
          <nav
            className={`hidden md:flex justify-between items-stretch text-white font-semibold tracking-wider`}
          >
            <ul className={`flex items-center`}>
              <NavItem path="/services" screen="desktop" classes="mr-4">
                services
              </NavItem>
              <li
                className={`relative down-chev nav-trigger flex h-full items-center text-white`}
              >
                <button className={`font-semibold text-lg pr-4`}>
                  projects
                </button>
                <ul className={`nav-dropdown`}>
                  {projects.map((each, i) => (
                    <li
                      key={each.slug + `-` + i}
                      className="relative block my-2"
                    >
                      <Link to={`/${each.slug}`}>{each.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <NavItem path="/contact" screen="desktop">
                contact
              </NavItem>
            </ul>
          </nav>
          <nav
            className={`mobile-nav ${
              isOpen && "is-open shadow-lg"
            } z-10 flex flex-col bg-cream pt-2 pb-8`}
          >
            <ul className="container">
              <NavItem path="/home" screen="mobile">
                home
              </NavItem>
              <NavItem path="/services" screen="mobile">
                services
              </NavItem>
              <li className={`relative down-chev`}>
                <button
                  className={`font-semibold text-lg w-full text-left`}
                  onClick={() => toggleMenuCollapse("#mob-projects")}
                  aria-label="Expand menu"
                  aria-haspopup="true"
                  aria-expanded="false"
                  role="tab"
                >
                  projects
                </button>
              </li>
              <div id="mob-projects" className={`mob-nav-dropdown`}>
                <ul>
                  {projects.map((each, i) => (
                    <li key={each.slug + `-` + i}>
                      <Link to={each.slug}>{each.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <NavItem path="/contact" screen="mobile">
                contact
              </NavItem>
            </ul>
          </nav>
          <div className={`overlay ${isOpen ? "is-active" : ""}`} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden mt-2 hamburger hamburger--squeeze relative ${
              isOpen ? "is-active" : ""
            }`}
            type="button"
            aria-label="Toggle Menu"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
