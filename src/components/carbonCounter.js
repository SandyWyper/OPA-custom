import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useSpring, animated } from "react-spring"
import useInView from "react-cool-inview"

const interpolateAndFloor = val => val.interpolate(val => Math.floor(val))

const Item = ({ data, isInView }) => {
  const image = getImage(data.icon)
  const { label, icon, unit, value } = data
  const alt = icon.title

  const props = useSpring({
    from: {
      val: 0,
    },
    to: {
      val: isInView ? value : 0,
    },
    delay: 1000,
    config: {
      easing: "ease-in",
      velocity: 10,
      friction: 50,
    },
  })

  return (
    <div className="flex items-center mb-8 md:w-auto md:px-8 lg:flex-none">
      <div className="mr-6 ">
        <GatsbyImage
          image={image}
          alt={alt}
          className="w-16 h-16 md:h-24 md:w-24 lg:h-16 lg:w-16 xl:w-24 xl:h-24"
        />
      </div>
      <div className="">
        <h4 className="mb-2 text-left max-w-xxs">{label}</h4>
        <div className="flex items-end ">
          <animated.h3 className={`mr-2 mb-0`}>
            {interpolateAndFloor(props.val)}
          </animated.h3>
          <h4 className="mb-1">{unit}</h4>
        </div>
      </div>
    </div>
  )
}

const CarbonCounter = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulScoreboardItem {
          nodes {
            id
            label
            unit
            value
            icon {
              gatsbyImageData
              title
            }
          }
        }
      }
    `
  )
  const [hasAppeared, setHasAppeared] = useState(false)

  const { observe } = useInView({
    threshold: 0.25,
    onEnter: ({ unobserve }) => {
      // Triggered when the target enters the viewport
      setHasAppeared(true)
      unobserve() // To stop observing the current target element
    },
  })

  return (
    <div ref={observe} className={`pb-24 md:pb-32 bg-cream`}>
      <div className="container">
        <h2>OPA's Legacy So Far ...</h2>
        <div className={`lg:flex lg:justify-center lg:pt-10`}>
          {data.allContentfulScoreboardItem.nodes.map((node, i) => (
            <Item
              data={node}
              index={i}
              key={`counter-${i}`}
              isInView={hasAppeared}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarbonCounter
