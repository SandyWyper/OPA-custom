import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectCard = ({
  data: {
    image,
    projectExcerpt: { projectExcerpt },
    title,
    slug,
  },
}) => {
  const imageData = getImage(image)
  return (
    <Link to={`/${slug}`}>
      <div className="pb-8">
        <GatsbyImage image={imageData} alt={title} className="mb-8" />
        <h5>{title}</h5>
        <p>{projectExcerpt}</p>
      </div>
    </Link>
  )
}

export default ProjectCard
