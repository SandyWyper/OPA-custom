import React, { useState } from "react"
import { Link } from "gatsby"
import useScrollPosition from "../lib/useScrollPosition"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  // Mobile nav open or not state
  const [isOpen, setIsOpen] = useState(false)
  const [isScrollTop, setIsScrollTop] = useState(true)
  const [isNavTransparent, setIsNavTransparent] = useState(true)

  useScrollPosition(
    ({ currPos, prevPos }) => {
      console.log(currPos.y > -220 || currPos.y > prevPos.y)
      const isShowNav = currPos.y > -220 || currPos.y > prevPos.y
      const isNavBGShown = currPos.y > -220
      if (isShowNav !== isScrollTop) setIsScrollTop(isShowNav)
      if (isNavBGShown !== isNavTransparent) setIsNavTransparent(isNavBGShown)
    },
    [isScrollTop, isNavTransparent],
    undefined,
    undefined,
    100
  )

  const NavItem = ({ children, path, screen, classes }) => (
    <li
      className={
        screen === "desktop"
          ? `flex h-full items-center ${classes} ml-12 font-normal hover:text-gray-300`
          : `text-4xl text-turquois py-4 active:text-green`
      }
    >
      <Link to={path} onClick={() => setIsOpen(false)}>
        {children}
      </Link>
    </li>
  )

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 header ${
        isScrollTop ? "is-active" : ""
      }`}
    >
      <div
        className={`nav-background relative ${
          isNavTransparent ? "is-transparent" : ""
        }`}
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
              <NavItem path="/services/" screen="desktop">
                services
              </NavItem>
              <NavItem path="/projects/" screen="desktop">
                projects
              </NavItem>
              <NavItem path="/contact/" screen="desktop">
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
              <NavItem path="/services/" screen="mobile">
                services
              </NavItem>
              <NavItem path="/projects/" screen="mobile">
                projects
              </NavItem>
              <NavItem path="/contact/" screen="mobile">
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
