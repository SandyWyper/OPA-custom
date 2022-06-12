import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import handlize from "../lib/handlize"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import PageHero from "../components/pageHero"
import SvgLink from "../components/svgLink"
import FAQs from "../components/FAQs"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const Services = ({ data }) => {
  const services = data.allContentfulService.nodes
  const { servicesHeroImage, servicesIntroText, servicesTitle } =
    data.contentfulServicePage

  //parse the contents of the rich-text data
  const introCopy = JSON.parse(servicesIntroText.raw)
  return (
    <>
      <GatsbySeo title={`OPA Services`} />
      <Layout>
        <section className="py-32 page-wrapper">
          <div className={`bg-cream`}>
            <PageHero image={servicesHeroImage} title={servicesTitle} />
            <div className="container py-8 lg:py-16 lg:grid lg:grid-cols-2">
              <div className="mb-6 lg:mb-0 lg:pr-4">
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
          <div className="px-4 lg:py-12 bg-cream">
            <div className="mx-auto md:max-w-3xl">
              {services.map(each => (
                <div
                  key={`service-${each.id}`}
                  id={handlize(each.nameOfService)}
                  className="py-10"
                >
                  <h2 className="section-title">{each.nameOfService}</h2>
                  <div>
                    {documentToReactComponents(
                      JSON.parse(each.serviceDescription.raw)
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container">
            <FAQs />
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
