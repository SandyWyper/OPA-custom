import * as React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import CarbonCounter from "../components/carbonCounter"
import Layout from "../components/layout"
import ServicesCTA from "../components/servicesCTA"
import GazBio from "../components/gazBio"
import LatestProjects from "../components/latestProjects"

const IndexPage = ({ data }) => {
  const {
    gazBioImage,
    gazBioText,
    heroImage,
    heroText,
    servicesButtonText,
    servicesCta,
    servicesCtaImage,
  } = data.allContentfulHomePage.nodes[0]

  return (
    <>
      <GatsbySeo />
      <Layout>
        <Hero image={heroImage} text={heroText} />
        <ServicesCTA
          image={servicesCtaImage}
          text={servicesCta}
          buttonText={servicesButtonText}
        />
        <CarbonCounter />
        <LatestProjects />
        <GazBio image={gazBioImage} text={gazBioText} />
      </Layout>
    </>
  )
}

export default IndexPage

export const data = graphql`
  query {
    allContentfulHomePage {
      nodes {
        servicesButtonText
        servicesCta {
          raw
        }
        servicesCtaImage {
          gatsbyImageData
          title
        }
        heroText {
          heroText
        }
        heroImage {
          gatsbyImageData
          title
        }
        gazBioImage {
          gatsbyImageData
          title
        }
        gazBioText {
          raw
        }
      }
    }
  }
`
