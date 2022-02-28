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
    <section className="bg-cream">
      <div className="container pb-16 lg:pb-32">
        <h2 className="">Latest Projects</h2>
        <div className="">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={swiper => console.log(swiper)}
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
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {latestProjectData.map(each => {
              const imageData = getImage(each.image)
              return (
                <SwiperSlide key={`latest-project-${each.id}`}>
                  <Link to={`/${each.slug}`}>
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
