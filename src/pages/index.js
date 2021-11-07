import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
// import { GatsbySeo } from "gatsby-plugin-next-seo"
import Hero from "../components/hero"
import CarbonCounter from "../components/carbonCounter"
import Layout from "../components/layout"
import ServicesCTA from "../components/servicesCTA"
import GazBio from "../components/gazBio"

const IndexPage = () => {
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
      <Hero />
      <CarbonCounter />
      <ServicesCTA />
      <GazBio />
    </Layout>
  )
}

export default IndexPage
