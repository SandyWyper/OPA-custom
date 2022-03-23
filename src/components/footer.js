import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import handlize from "../lib/handlize"

const Footer = ({ links }) => {
  const data = links.allContentfulProject.nodes
  const services = links.allContentfulService.nodes
  return (
    <footer className="footer">
      <div className="container pt-16 lg:pt-16">
        <div className="lg:flex lg:pb-16 lg:justify-between">
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <Link to={`/services`}>
              <h3 className="text-white">Services</h3>
            </Link>
            <Link to={`/${data[0].slug}`}>
              <h3 className="text-white ">Case studies</h3>{" "}
            </Link>
            <Link to={`/contact`}>
              <h3 className="mb-4 text-white">Contact</h3>
            </Link>
          </div>

          <div className="mb-16 lg:mb-0 lg:w-1/4">
            <StaticImage
              className={`max-w-xs`}
              src={`../images/Logo-text.png`}
              alt="One Planet Associates logo"
            />
          </div>
        </div>
        <p className={`text-xs text-white`}>
          &copy; {new Date().getFullYear()}
          {` - `}
          One Planet Associates
          {/* <a target={`_blank`} href="https://tinderboxwebsolutions.com">
            Tinderbox Web Solutions
          </a> */}
        </p>
      </div>
    </footer>
  )
}

export default Footer
