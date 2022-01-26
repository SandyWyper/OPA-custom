import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const links = useStaticQuery(
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
  return (
    <div className={`min-h-screen flex flex-col justify-between max-w-full`}>
      <div>
        <Header links={links} />
        <main>{children}</main>
      </div>
      {/* <div className=" footer-space"></div> */}
      <Footer links={links} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
