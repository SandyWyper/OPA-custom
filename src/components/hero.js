import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import HeaderSpace from "./headerSpace"

const Hero = () => {
  return (
    <section className={`bg-gray-500`}>
      <HeaderSpace />
      <div className="container flex mx-auto">
        <div>
          <StaticImage className={`max-w-lg`} src={`../images/Logo-text.png`} />
          <h3>
            OPA provides planning and consultancy services for domestic and
            commercial clients
          </h3>
        </div>
        <StaticImage className={`max-w-lg`} src={`../images/16.29.10 3.JPG`} />
      </div>
    </section>
  )
}
export default Hero
