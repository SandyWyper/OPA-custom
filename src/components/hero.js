import React from "react"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const Hero = ({ image, text }) => {
  const imageData = getImage(image)

  return (
    <section className={`min-h-screen flex flex-col`}>
      <div className="absolute inset-0 z-0 h-full">
        <GatsbyImage
          image={imageData}
          alt={image.title}
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
                className={`mr-20 md:mx-0 max-w-sm`}
                src={`../images/Main-Text-Only-White.png`}
                alt="One Planet Associates"
              />
            </div>
          </div>
          <div className="">
            <p className="mb-0 mr-16 font-medium text-left text-white md:text-xl md:pl-12 md:max-w-3xl">
              {text.heroText}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
