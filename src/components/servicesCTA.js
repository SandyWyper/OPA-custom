import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ServicesCTA = ({ image, text, buttonText }) => {
  const imageData = getImage(image)
  //parse the contents of the rich-text data
  const bodyCopy = JSON.parse(text.raw)

  return (
    <section className="bg-cream ">
      <div className="py-10 md:py-32 md:container">
        <div className="lg:flex lg:items-center">
          <div className="px-4 mb-12 border-l-4 lg:mb-0 md:pl-6 lg:w-1/2 lg:pr-16 md:border-navy">
            <div className="mb-12">{documentToReactComponents(bodyCopy)}</div>
            <button
              className={`px-12 py-2 bg-navy text-pink-50 tracking-widest`}
            >
              <Link to={`/services/`} className="uppercase">
                {buttonText}
              </Link>
            </button>
          </div>
          <div className="lg:w-1/2">
            <GatsbyImage image={imageData} alt={image.title} fit="contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default ServicesCTA
