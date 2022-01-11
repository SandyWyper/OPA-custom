import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useSpring, animated } from "react-spring"

const interpolateAndFloor = val => val.interpolate(val => Math.floor(val))

const Item = ({ data }) => {
  const [hasAppeared, setHasAppeared] = useState(false)
  const image = getImage(data.icon)
  const { label, icon, unit, value } = data
  const alt = icon.title
  const valueToShow = hasAppeared ? value : 0

  const props = useSpring({
    from: {
      val: 0,
    },
    to: {
      val: valueToShow,
    },
    delay: 200,
    config: {
      easing: "ease-in",
      velocity: 10,
    },
  })

  return (
    <div className="px-8 text-center">
      <h3>{label}</h3>
      <GatsbyImage image={image} alt={alt} />
      <animated.h3>{interpolateAndFloor(props.val)}</animated.h3>
      <h3>{unit}</h3>
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

  return (
    <div className={`container mx-auto px-4 bg-green-800`}>
      <div className={`grid grid-cols-1 md:grid-cols-4`}>
        {data.allContentfulScoreboardItem.nodes.map((node, i) => (
          <Item data={node} index={i} />
        ))}
      </div>
    </div>
  )
}

export default CarbonCounter
