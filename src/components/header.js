import React, { useState } from "react"
import { Link } from "gatsby"
import useScrollPosition from "../lib/useScrollPosition"
import { StaticImage } from "gatsby-plugin-image"

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

  const NavItem = ({ children, path, screen, classes }) => (
    <li
      className={
        screen === "desktop"
          ? `flex h-full items-center ${classes} ml-12 text-lg font-normal hover:text-gray-300`
          : `text-4xl text-turquois py-4 active:text-green`
      }
      onClick={() => setIsOpen(false)}
    >
      <Link to={path}>{children}</Link>
    </li>
  )

  return (
    <header className={`fixed inset-x-0 top-0 z-50`}>
      <div
        className={`nav-background relative ${isScrollTop ? "" : "is-active"}`}
      >
        <div className={`container mx-auto flex justify-between items-stretch`}>
          <div>
            <Link to="/">
              <StaticImage
                className={`w-16 h-16 my-2 md:w-20 md:h-20`}
                src={`../images/OPA.png`}
                alt="One Planet Associates Logo"
                quality="100"
              />
            </Link>
          </div>
          <nav
            className={`hidden md:flex justify-between items-stretch text-white font-semibold tracking-wider`}
          >
            <ul className={`flex items-center`}>
              <NavItem path="/" screen="desktop">
                home
              </NavItem>
              <NavItem path="/services" screen="desktop">
                services
              </NavItem>
              <NavItem path="/projects" screen="desktop">
                projects
              </NavItem>
              <NavItem path="/contact" screen="desktop">
                contact
              </NavItem>
            </ul>
          </nav>
          <nav
            className={`mobile-nav ${
              isOpen && "is-open shadow-lg"
            } z-10 flex flex-col pt-2 pb-8`}
          >
            <ul className="container">
              <NavItem path="/" screen="mobile">
                home
              </NavItem>
              <NavItem path="/services" screen="mobile">
                services
              </NavItem>
              <NavItem path="/projects" screen="mobile">
                projects
              </NavItem>
              <div id="mob-projects-content" className={`mob-nav-dropdown`}>
                <ul>
                  {projects.map((each, i) => (
                    <li
                      key={each.slug + `-` + i}
                      className="py-2 text-turquois"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <Link to={`/${each.slug}`}>{each.title}</Link>
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
