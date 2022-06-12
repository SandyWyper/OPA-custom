import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PageHero = ({ image, title }) => (
  <div className="relative bg-cream">
    <GatsbyImage
      className={`max-h-96 object-cover object-top`}
      image={getImage(image)}
      alt={title}
      loading="eager"
    />
    <div className="flex items-center justify-center py-4 md:-translate-y-1/2 md:py-12 md:inset-x-0 md:transform md:absolute md:bg-opacity-30 top-1/2 md:bg-navy">
      <h1 className="mb-0 md:text-white">{title}</h1>
    </div>
  </div>
)

export default PageHero
