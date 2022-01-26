import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import handlize from "../lib/handlize"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"
import SvgLink from "../components/svgLink"

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
        <div className={`md:container py-32 `}>
          <div className={`bg-cream `}>
            <div className="relative">
              <StaticImage
                className={`max-h-96 object-cover object-top`}
                src={`../images/DJI_0058.JPG`}
                alt="XXXXX"
              />
              <div className="absolute bottom-0 left-0 hidden p-8 bg-cream lg:block">
                <h1 className="mb-0 text-navy">OPA Services</h1>
              </div>
            </div>
            <div className="px-4 py-16 lg:px-8 lg:grid lg:grid-cols-2">
              <div className="mb-6 lg:mb-0 lg:pr-4">
                <h1 className="text-navy lg:hidden">OPA Services</h1>
                <p className="">
                  OPA can manage the whole planning process, from early-stage
                  site conception and preparation of pre-planning documents
                  through to securing decisions and discharging conditions. OPA
                  pride ourselves on managing stakeholders effectively and
                  ensuring a transparent service from start to finish. Although
                  we are solution focused and able to achieve results at any
                  stage of development, the earlier OPA gets involved the more
                  effective we can be, saving clients costs and avoiding
                  complex, time consuming situations.
                </p>
              </div>
              <div className="lg:pl-12 lg:pr-8">
                <div>
                  {services.map(each => {
                    return (
                      <div key={each.id} className="flex">
                        <SvgLink
                          className="flex-none mt-1 mr-2"
                          width={20}
                          height={20}
                        />
                        <AnchorLink
                          to={`services#${handlize(each.nameOfService)}`}
                          title={each.nameOfService}
                          className="mb-6 text-lg font-semibold text-navy"
                        >
                          {each.nameOfService}
                        </AnchorLink>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-12 bg-cream">
            <div className="mx-auto md:max-w-3xl">
              {services.map(each => (
                <div
                  key={`service-${each.id}`}
                  id={handlize(each.nameOfService)}
                  className="py-10"
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
