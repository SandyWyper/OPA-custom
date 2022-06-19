import * as React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import CarbonCounter from "../components/carbonCounter"
import Layout from "../components/layout"
import ServicesCTA from "../components/servicesCTA"
import GazBio from "../components/gazBio"
import LatestProjects from "../components/latestProjects"
import { Helmet } from "react-helmet"
import { LogoJsonLd } from "gatsby-plugin-next-seo"

const IndexPage = ({ data }) => {
  const {
    gazBioImage,
    gazBioText,
    heroImage,
    heroText,
    servicesButtonText,
    servicesCta,
    servicesCtaImage,
    logo,
  } = data.allContentfulHomePage.nodes[0]

  return (
    <>
      <GatsbySeo
        openGraph={{
          type: "website",
          url: "https://oneplanetassociates.com/",
          title: "One Planet Asssociates Ltd",
          description:
            "OPA provides planning and consultancy services for domestic and commercial clients.",
          images: [
            {
              url: `https:${heroImage.resize.src}`,
              width: heroImage.resize.width,
              height: heroImage.resize.height,
              alt: heroImage.title,
            },
          ],
        }}
      />
      <LogoJsonLd
        logo={`https:${logo.resize.src}`}
        url="https://oneplanetassociates.com/"
      />
      <Helmet>
        <meta
          name="google-site-verification"
          content="G9gB-KnSrc6ROHwtZ88LpkbNkXSz9P9FUwK3dmRHlR4"
        />
      </Helmet>
      <Layout logo={logo}>
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
          resize(width: 900) {
            height
            width
            src
          }
        }
        gazBioImage {
          gatsbyImageData
          title
          file {
            url
          }
        }
        gazBioText {
          raw
        }
        logo {
          gatsbyImageData
          resize(width: 600, quality: 90) {
            height
            src
            width
          }
        }
      }
    }
  }
`
