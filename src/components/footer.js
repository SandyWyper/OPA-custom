import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = ({ links }) => {
  const data = links.allContentfulProject.nodes
  return (
    <footer className="text-white bg-navy">
      <div className="container pt-8">
        <div className="md:flex md:justify-between">
          <div className="mb-4">
            <Link to={`/services`}>
              <h3 className="mb-4">Services</h3>
            </Link>
            <Link to={`/contact`}>
              <h3 className="mb-4">Contact</h3>
            </Link>
          </div>
          <div>
            <h3>Case studies</h3>
            {data.map((each, i) => (
              <Link key={`footer-slug-${i}`} to={`/${each.slug}`}>
                <h4 className="mb-4">{each.title}</h4>
              </Link>
            ))}
          </div>
          <div>
            <StaticImage
              className={`max-w-xs`}
              src={`../images/Logo-text.png`}
              alt="XXXXX"
            />
          </div>
        </div>
        <p className={`text-xs`}>
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
