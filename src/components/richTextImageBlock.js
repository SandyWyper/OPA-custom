import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const RichTextImageBlock = ({ data }) => {
  const imageData = getImage(data[0])
  console.log("richTextImageBlock", data)
  if (imageData === undefined) return

  return (
    <div className="mb-8">
      <GatsbyImage image={imageData} alt={``} />
    </div>
  )
}

export default RichTextImageBlock
