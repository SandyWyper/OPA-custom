import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import HeroCarousel from "./heroCarousel"

const Hero = () => {
  return (
    <section className={`hero-container lg:flex lg:flex-col`}>
      <div className="container mb-16 lg:items-center lg:justify-center lg:flex lg:h-full lg:flex-grow">
        <div className="mx-auto mb-8 md:max-w-lg">
          <div className="pt-10">
            <div className="pb-8 mx-auto md:mx-0 lg:mr-16">
              <StaticImage
                className={`mx-6 md:mx-0 max-w-sm`}
                src={`../images/Logo-text.png`}
                alt="XXXXX"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="mb-0 text-xl text-white md:max-w-3xl">
              OPA provide planning and consultancy services for domestic and
              commercial clients.
            </h2>
          </div>
        </div>
        <div className="max-w-screen md:max-w-md md:mx-auto lg:w-3/5 lg:p-12 lg:max-w-none">
          <HeroCarousel />
        </div>
      </div>
    </section>
  )
}
export default Hero
