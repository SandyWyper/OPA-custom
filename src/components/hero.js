import React from "react"
import { StaticImage } from "gatsby-plugin-image"
// import HeroCarousel from "./heroCarousel"

const Hero = () => {
  return (
    <section className={`min-h-screen flex flex-col`}>
      <div className="absolute inset-0 z-0 h-full">
        <StaticImage
          src={`../images/solar+wind.JPG`}
          alt="XXXXX"
          fit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="hero-overlay" />
      <div className="container relative flex items-center justify-start flex-grow h-full">
        <div className="z-20 mb-8 md:max-w-lg">
          <div className="pt-10">
            <div className="pb-8 lg:ml-12 lg:mr-16">
              <StaticImage
                className={` md:mx-0 max-w-sm`}
                src={`../images/Main-Text-Only-White.png`}
                alt="XXXXX"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="mb-0 text-xl text-white md:pl-12 md:max-w-3xl">
              OPA provide planning and consultancy services for domestic and
              commercial clients.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
