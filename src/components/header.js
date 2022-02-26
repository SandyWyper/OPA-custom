import React, { useState } from "react"
import { Link } from "gatsby"
import useScrollPosition from "../lib/useScrollPosition"
// import LogoImg from "../images/OPA.png"
import { useSpring, animated } from "react-spring"
import { toggleMenuCollapse } from "../lib/toggleMenuCollapse"
import { useHover } from "../lib/useHover"
import useMeasure from "react-use-measure"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ links }) => {
  const [hoverRef, isHovered] = useHover()
  const [ref, bounds] = useMeasure()
  const projects = links.allContentfulProject.nodes
  // Mobile nav open or not state
  const [isOpen, setIsOpen] = useState(false)

  const [isScrollTop, setIsScrollTop] = useState(true)

  const dropDownSpring = useSpring({
    to: {
      height: isHovered ? `${bounds.height}px` : `0px`,
    },
    config: { friction: 10, mass: 6, tension: 900, clamp: true },
  })

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
          ? `flex h-full items-center ${classes} ml-12 text-xl font-normal hover:text-gray-300`
          : `text-4xl text-turquois py-4 active:text-green`
      }
      onClick={() => setIsOpen(false)}
    >
      <Link to={path} className={``}>
        {children}
      </Link>
    </li>
  )

  return (
    <header className={`fixed inset-x-0 top-0 z-50`}>
      <div className={`nav-background ${isScrollTop ? "" : "is-active"}`}>
        <div className={`container mx-auto flex justify-between items-stretch`}>
          <div>
            <Link to="/">
              {/* <img
                src={LogoImg}
                alt="One Planet Associates logo"
                className="w-16 h-16 my-2 md:w-20 md:h-20"
              /> */}
              <StaticImage
                className={`w-16 h-16 my-2 md:w-20 md:h-20`}
                src={`../images/OPA.png`}
                alt="One Planet Associates Logo"
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
              <li
                className={`relative  ml-12 down-chev nav-trigger flex h-full items-center text-white`}
                ref={hoverRef}
              >
                <button className={`text-lg pr-4`}>projects</button>
                <animated.div className={`nav-dropdown`} style={dropDownSpring}>
                  <ul ref={ref}>
                    {projects.map((each, i) => (
                      <li key={each.slug + `-` + i} className="py-4">
                        <Link to={`/${each.slug}`}>{each.title}</Link>
                      </li>
                    ))}
                  </ul>
                </animated.div>
              </li>
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
              <li id="mob-projects-tab" className={`relative down-chev-mob`}>
                <button
                  className={`text-4xl text-turquois py-4 w-full text-left`}
                  onClick={() =>
                    toggleMenuCollapse(
                      "#mob-projects-content",
                      "#mob-projects-tab"
                    )
                  }
                  aria-label="Expand menu"
                  aria-haspopup="true"
                  aria-expanded="false"
                  role="tab"
                >
                  projects
                </button>
              </li>
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
