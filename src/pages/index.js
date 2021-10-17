import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
// import { GatsbySeo } from "gatsby-plugin-next-seo"

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
      <div className={`min-h-screen bg-yellow-200`}>Hero</div>
      <div className={`h-24 bg-green-800`}>Carbon counter</div>
      <div className={`min-h-screen bg-gray-400`}>Services</div>
      <div className={`min-h-screen bg-blue-200`}>About Gaz</div>
    </Layout>
  )
}

export default IndexPage
