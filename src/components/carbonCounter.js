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
    <div className="px-8 text-center">
      <h3>{label}</h3>
      <div className="px-10 py-6">
        <GatsbyImage image={image} alt={alt} />
      </div>
      <div className="flex justify-center">
        <animated.h3 className={`mr-2`}>
          {interpolateAndFloor(props.val)}
        </animated.h3>
        <h3>{unit}</h3>
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
    <div ref={observe} className={`py-12 `}>
      <div className="container">
        <div className={`grid grid-cols-1 md:grid-cols-4`}>
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
