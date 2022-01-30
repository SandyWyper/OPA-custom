import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const GazBio = ({ image, text }) => {
  const imageData = getImage(image)
  //parse the contents of the rich-text data
  const bodyCopy = JSON.parse(text.raw)
  return (
    <div className={`py-12 bg-navy`}>
      <div className="container py-12 overflow-hidden lg:flex lg:flex-row-reverse lg:items-center">
        <div className="mx-auto mb-12 md:flex-none md:w-max lg:w-1/3">
          <GatsbyImage
            className={`max-w-sm rounded-full`}
            image={imageData}
            alt={image.title}
            layout={`constrained`}
          />
        </div>
        <div className="text-white lg:pr-12">
          {documentToReactComponents(bodyCopy)}
        </div>
      </div>
    </div>
  )
}

export default GazBio
