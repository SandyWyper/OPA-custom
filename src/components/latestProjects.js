import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const LatestProjects = () => {
  const data = useStaticQuery(
    graphql`
      {
        allContentfulProject(
          limit: 3
          sort: { order: ASC, fields: createdAt }
        ) {
          nodes {
            title
            id
            slug
            image {
              gatsbyImageData
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
    <div className="container py-4">
      <div className="grid-cols-3 md:grid md:gap-4">
        {latestProjectData.map(each => {
          const imageData = getImage(each.image)
          return (
            <div key={`latest-project-${each.id}`}>
              <Link to={`/${each.slug}`}>
                <div>
                  <GatsbyImage image={imageData} alt={each.image.title} />
                  <h4>{each.title}</h4>
                  <p>
                    {
                      each.childContentfulProjectProjectExcerptTextNode
                        .projectExcerpt
                    }
                  </p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LatestProjects
