import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer className="footer md:pt-20">
      <div className="container flex flex-col justify-between">
        <div className="flex flex-col h-full py-12 justify-evenly lg:flex-row-reverse lg:justify-between md:pb-20">
          <div className="py-6 lg:pt:0 lg:w-1/4">
            <Link to={`/services`}>
              <h3 className="text-white">Services</h3>
            </Link>
            <Link to={`/projects`}>
              <h3 className="text-white ">Case studies</h3>
            </Link>
            <Link to={`/contact`}>
              <h3 className="mb-4 text-white">Contact</h3>
            </Link>
          </div>

          <div className="py-6 lg:pt-0 lg:w-1/4">
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
