import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const GazBio = ({ image, text }) => {
  const imageData = getImage(image)
  //parse the contents of the rich-text data
  const bodyCopy = JSON.parse(text.raw)

  return (
    <div className={`py-12 bg-navy`}>
      <GatsbySeo
        openGraph={{
          title: "Gareth Davies",
          description: "Director of One Planet Asssociates Ltd",
          url: "https://oneplanetassociates.com/",
          type: "profile",
          profile: {
            firstName: "Gareth",
            lastName: "Davies",
            username: "gareth.davies",
            gender: "male",
          },
          images: [
            {
              url: `https:${image.file.url}`,
              width: image.gatsbyImageData.width,
              height: image.gatsbyImageData.height,
              alt: "Gareth Davies - Profile Photo",
            },
          ],
        }}
      />
      <div className="container py-12 overflow-hidden lg:flex lg:flex-row-reverse lg:items-center">
        <div className="mx-auto mb-12 text-center md:flex-none md:w-max lg:w-1/3">
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
