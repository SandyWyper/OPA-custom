import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const RichTextImageBlock = ({ data }) => {
  const imageData = getImage(data[0])
  if (imageData === undefined) return
  // console.log(data[0].title)
  return (
    <div className="mb-8">
      <GatsbyImage image={imageData} alt={`${data[0].title}`} />
    </div>
  )
}

export default RichTextImageBlock
