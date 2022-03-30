import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectsDropdown = () => {
  const data = useStaticQuery(
    graphql`
      {
        allContentfulProject(sort: { order: ASC, fields: createdAt }) {
          nodes {
            title
            id
            slug
            image {
              gatsbyImageData(
                layout: CONSTRAINED
                resizingBehavior: CROP
                aspectRatio: 1.5
              )
              title
            }
            childContentfulProjectProjectExcerptTextNode {
              projectExcerpt
            }
          }
        }
      }
    `
  )

  const latestProjectData = data.allContentfulProject.nodes
  return (
    <>
      {latestProjectData.map(each => {
        const imageData = getImage(each.image)
        return (
          <div key={`latest-project-${each.id}`}>
            <Link to={`/${each.slug}`}>
              <div className="relative w-64 mx-2 shadow-xl">
                <GatsbyImage
                  image={imageData}
                  alt={each.image.title}
                  className=""
                />
                <div className="absolute inset-0 flex items-center justify-center duration-300 bg-black hover:transition-opacity bg-opacity-90 hover:bg-opacity-20">
                  <p className="p-4 mb-0 text-xl leading-5 text-center ">
                    {each.title}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default ProjectsDropdown
