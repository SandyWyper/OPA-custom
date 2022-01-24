import React from "react"
import { StaticImage } from "gatsby-plugin-image"
// import HeroCarousel from "./heroCarousel"

const Hero = () => {
  return (
    <section className={`min-h-screen lg:flex lg:flex-col`}>
      <StaticImage
        src={`../images/solar+wind.JPG`}
        alt="XXXXX"
        className="absolute inset-0 z-0"
      />
      <div className="hero-overlay" />
      <div className="container relative lg:items-center lg:justify-start lg:flex lg:h-full lg:flex-grow">
        <div className="z-20 mb-8 md:max-w-lg">
          <div className="pt-10">
            <div className="pb-8 ml-12 lg:mr-16">
              <StaticImage
                className={` md:mx-0 max-w-sm`}
                src={`../images/Main-Text-Only-White.png`}
                alt="XXXXX"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="pl-12 mb-0 text-xl text-white md:max-w-3xl">
              OPA provide planning and consultancy services for domestic and
              commercial clients.
            </h2>
          </div>
        </div>
        {/* <div className="max-w-screen md:max-w-md md:mx-auto lg:w-3/5 lg:flex-col lg:flex lg:flex-grow lg:max-w-none lg:h-full"> */}
        {/* <StaticImage
            src={`../images/solar+wind.JPG`}
            alt="XXXXX"
            className="object-cover"
          /> */}
        {/* <HeroCarousel /> */}
        {/* </div> */}
      </div>
    </section>
  )
}
export default Hero
