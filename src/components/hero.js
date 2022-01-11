import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { animated, useSpring } from "react-spring"
import HeaderSpace from "./headerSpace"
import useScrollPosition from "../lib/useScrollPosition"

const Hero = () => {
  const imageClass = "border-8 border-white mx-4 h-full w-auto"

  useScrollPosition(
    ({ prevPos, currPos }) => {
      console.log(prevPos, currPos)
    },
    [],
    undefined,
    undefined,
    100
  )

  return (
    <section className={`hero-container`}>
      <HeaderSpace />
      <div className="container flex items-center justify-center mb-16 md:mr-36">
        <div className="md:max-w-4xl">
          <div className="md:pt-16">
            <div className="pb-8 mx-auto md:mx-0 md:mr-16 blury">
              <StaticImage
                className={`mx-6 md:mx-0 max-w-lg`}
                src={`../images/Logo-text.png`}
                alt="XXXXX"
              />
            </div>
          </div>
          <div className="text-center md:text-left blury">
            <h2 className="mb-0 text-xl text-white md:max-w-3xl">
              OPA provides planning and consultancy services for domestic and
              commercial clients.
            </h2>
          </div>
        </div>
      </div>
      <div className="overflow-x-hidden md:px-12">
        <div className="flex ">
          <div className="flex-none">
            <StaticImage
              className={imageClass}
              src={`../images/solar-farm-above.JPG`}
              alt="XXXXX"
              height={384}
            />
          </div>
          <div className="flex-none">
            <StaticImage
              className={imageClass}
              src={`../images/solar+wind.JPG`}
              alt="XXXXX"
              height={384}
            />
          </div>
          <div className="flex-none">
            <StaticImage
              className={imageClass}
              src={`../images/turbine-towards-padstow.JPG`}
              alt="XXXXX"
              height={384}
            />
          </div>
          <div className="flex-none">
            <StaticImage
              className={imageClass}
              src={`../images/solar-farm-2.JPG`}
              alt="XXXXX"
              height={384}
            />
          </div>
          <div className="flex-none">
            <StaticImage
              className={imageClass}
              src={`../images/turbine-hill.JPG`}
              alt="XXXXX"
              height={384}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
