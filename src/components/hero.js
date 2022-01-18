import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import HeaderSpace from "./headerSpace"
import HeroCarousel from "./heroCarousel"

const Hero = () => {
  return (
    <section className={`hero-container`}>
      <HeaderSpace />
      <div className="container flex items-center justify-center mb-16 md:mr-36">
        <div className="md:max-w-4xl">
          <div className="md:pt-16">
            <div className="pb-8 mx-auto md:mx-0 md:mr-16">
              <StaticImage
                className={`mx-6 md:mx-0 max-w-sm`}
                src={`../images/Logo-text.png`}
                alt="XXXXX"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="mb-0 text-xl text-white md:max-w-3xl">
              OPA provides planning and consultancy services for domestic and
              commercial clients.
            </h2>
          </div>
        </div>
        <HeroCarousel />
      </div>
    </section>
  )
}
export default Hero
