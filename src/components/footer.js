import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = ({ links }) => {
  const data = links.allContentfulProject.nodes
  return (
    <footer className="footer">
      <div className="container pt-16 lg:pt-16">
        <div className="lg:flex lg:pb-16">
          <div className="mb-4 lg:mb-0 lg:w-1/4">
            <Link to={`/services`}>
              <h3 className="mb-4 text-white">Services</h3>
            </Link>
            <Link to={`/contact`}>
              <h3 className="mb-4 text-white">Contact</h3>
            </Link>
          </div>
          <div className="mb-16 lg:mb-0 lg:w-1/2">
            <h3 className="text-white ">Case studies</h3>
            {data.map((each, i) => (
              <Link key={`footer-slug-${i}`} to={`/${each.slug}`}>
                <h4 className="mb-4 ml-4 text-white">{each.title}</h4>
              </Link>
            ))}
          </div>
          <div className="mb-16 lg:mb-0 lg:w-1/4">
            <StaticImage
              className={`max-w-xs`}
              src={`../images/Logo-text.png`}
              alt="XXXXX"
            />
          </div>
        </div>
        <p className={`text-xs text-white`}>
          &copy; {new Date().getFullYear()}
          {` - `}
          <a target={`_blank`} href="https://tinderboxwebsolutions.com">
            Tinderbox Web Solutions
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
