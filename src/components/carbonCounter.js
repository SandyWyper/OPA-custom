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
    <div className="w-1/2 mb-8 text-center md:w-auto md:px-8 lg:flex-none">
      <h5 className="mb-2">{label}</h5>
      <div className="mb-2 ">
        <GatsbyImage image={image} alt={alt} className="w-24 md:w-32" />
      </div>
      <div className="flex items-end justify-center">
        <animated.h3 className={`mr-2 mb-0 font-bold`}>
          {interpolateAndFloor(props.val)}
        </animated.h3>
        <h4 className="mb-1">{unit}</h4>
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
    <div ref={observe} className={`pb-12 md:pb-24 bg-cream`}>
      <div className="container">
        <div className={`max-w-5xl mx-auto flex flex-wrap justify-evenly`}>
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
