import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"
// Import Swiper styles
import "swiper/css"

// install Swiper modules
SwiperCore.use([Navigation])

const LatestProjects = () => {
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
                resizingBehavior: CROP
                cropFocus: CENTER
                aspectRatio: 1.5
                quality: 85
                sizes: "(min-width: 800px) 25vw, (min-width: 480px) 50vw, 100vw"
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
    <section className="bg-cream">
      <div className="container py-16">
        <h2>Latest Projects</h2>
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation={true}
            breakpoints={{
              // when window width is >= 320px
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {latestProjectData.map(each => {
              const imageData = getImage(each.image)
              return (
                <SwiperSlide key={`latest-project-${each.id}`}>
                  <Link to={`/projects/${each.slug}/`}>
                    <div className="pb-8">
                      <GatsbyImage
                        image={imageData}
                        alt={each.image.title}
                        className="mb-8"
                      />
                      <h5>{each.title}</h5>
                      <p>
                        {
                          each.childContentfulProjectProjectExcerptTextNode
                            .projectExcerpt
                        }
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default LatestProjects
