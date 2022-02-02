import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import handlize from "../lib/handlize"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import SvgLink from "../components/svgLink"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const Services = ({ data }) => {
  const services = data.allContentfulService.nodes
  const { servicesHeroImage, servicesIntroText, servicesTitle } =
    data.contentfulServicePage

  const imageData = getImage(servicesHeroImage)
  //parse the contents of the rich-text data
  const introCopy = JSON.parse(servicesIntroText.raw)
  return (
    <>
      <GatsbySeo title={`OPA Services`} />
      <Layout>
        <section className="page-wrapper">
          <div className={`md:container py-32 `}>
            <div className={`bg-cream`}>
              <div className="relative">
                <GatsbyImage
                  className={`max-h-96 object-cover object-top`}
                  image={imageData}
                  alt={servicesHeroImage.title}
                />
                <div className="absolute bottom-0 left-0 hidden p-8 bg-cream lg:block">
                  <h1 className="mb-0 text-navy">{servicesTitle}</h1>
                </div>
              </div>
              <div className="px-4 py-16 lg:px-8 lg:grid lg:grid-cols-2">
                <div className="mb-6 lg:mb-0 lg:pr-4">
                  <h1 className="text-navy lg:hidden">{servicesTitle}</h1>
                  {documentToReactComponents(introCopy)}
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
    </>
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
    contentfulServicePage {
      servicesHeroImage {
        gatsbyImageData
        title
      }
      servicesIntroText {
        raw
      }
      servicesTitle
    }
  }
`
