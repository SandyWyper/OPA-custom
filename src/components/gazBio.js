import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const GazBio = () => {
  return (
    <div className={`min-h-screen bg-blue-200`}>
      <h2>Personal Header</h2>
      <p>bio about gaz</p>
      <StaticImage className={`max-w-lg`} src={`../images/16.29.10 3.JPG`} />
    </div>
  )
}

export default GazBio
