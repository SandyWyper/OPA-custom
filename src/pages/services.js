import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import handlize from "../lib/handlize"
import { AnchorLink } from "gatsby-plugin-anchor-links"

// import { GatsbySeo } from "gatsby-plugin-next-seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const Services = ({ data }) => {
  const services = data.allContentfulService.nodes

  return (
    <Layout>
      {/* <GatsbySeo
    title="Ricky Richards Photography"
    description="Ricky Richards Photography British Photo Journalist and Documentary photographer based in San Francisco USA"
    openGraph={{
      images: [
        {
          url: data.OGImage.sharingImage.resize.src,
          width: data.OGImage.sharingImage.resize.width,
          height: data.OGImage.sharingImage.resize.height,
          alt: data.OGImage.sharingImage.title,
        },
      ],
    }}
  /> */}
      <section className="page-wrapper">
        <div className={`container py-32 `}>
          <div className="bg-white md:grid md:grid-cols-2 ">
            <div className="mb-6 md:mb-0">
              <h1>OPA Services</h1>
              <p>
                OPA can manage the whole planning process, from early-stage site
                conception and preparation of pre-planning documents through to
                securing decisions and discharging conditions. OPA pride
                ourselves on managing stakeholders effectively and ensuring a
                transparent service from start to finish. Although we are
                solution focused and able to achieve results at any stage of
                development, the earlier OPA gets involved the more effective we
                can be, saving clients costs and avoiding complex, time
                consuming situations.
              </p>
            </div>
            <div className="md:pl-4">
              <div>
                {services.map(each => {
                  return (
                    <div key={each.id}>
                      <AnchorLink
                        to={`services#${handlize(each.nameOfService)}`}
                        title={each.nameOfService}
                      >
                        {each.nameOfService}
                      </AnchorLink>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="py-12 bg-white">
            <div className="mx-auto md:max-w-3xl">
              {services.map(each => (
                <div
                  key={`service-${each.id}`}
                  id={handlize(each.nameOfService)}
                >
                  <h2>{each.nameOfService}</h2>
                  <div>
                    {documentToReactComponents(
                      JSON.parse(each.serviceDescription.raw)
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Services

export const data = graphql`
  query {
    allContentfulService(sort: { fields: pageOrder }) {
      nodes {
        id
        nameOfService
        serviceDescription {
          raw
        }
      }
      totalCount
    }
  }
`
