import React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import { GatsbySeo } from "gatsby-plugin-next-seo"
// import { BLOCKS } from "@contentful/rich-text-types"
// import RichTextImageBlock from "../components/richTextImageBlock"
import LatestProjects from "../components/latestProjects"

const Project = props => {
  const {
    amountCarbonOffsetPerAnum,
    amountEnergyGeneratedPerAnum,
    title,
    image,
    projectContent,
    location,
  } = props.data.contentfulProject
  const imageData = getImage(image)

  //parse the contents of the rich-text data
  const document = JSON.parse(projectContent.raw)

  // console.log(props.data.contentfulProject)
  // // functions and options for dealing with images used in the rich-text area
  // const getEntryWithId = entryId =>
  //   projectContent.references.filter(ref => ref.contentful_id === entryId)

  // const options = {
  //   renderNode: {
  //     [BLOCKS.EMBEDDED_ENTRY]: node => {
  //       const nodeData = getEntryWithId(node.data.target.sys.id)
  //       const images = get(nodeData, "[0].images", undefined)

  //       const baseIndexForComponent = lightboxImageIndex
  //       lightboxImageIndex = lightboxImageIndex + images.length

  //       images.forEach(image => {
  //         elements.push({ src: image.resize.src, caption: image.title })
  //       })

  //       return (
  //         <RichTextImageBlock
  //           data={getEntryWithId(node.data.target.sys.id)}
  //           baseIndex={baseIndexForComponent}
  //         />
  //       )
  //     },
  //   },
  // }
  // const elements = [
  //   {
  //     src: `https:${titleImageLandscape.resize.src}`,
  //     caption: `${titleImageLandscape.title}`,
  //   },
  //   {
  //     src: `https:${titleImageCropped.resize.src}`,
  //     caption: `${titleImageCropped.title}`,
  //   },
  // ]
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
        <div className={`md:container pt-32`}>
          <div className="bg-cream pb-52">
            <div className="lg:grid lg:grid-cols-2">
              <div className="mb-6 lg:mb-0">
                <GatsbyImage image={imageData} alt={image.title} />
              </div>
              <div className="px-4 lg:p-8">
                <h1 className="">{title}</h1>
                <h3 className="inline-block border-b text-navy border-navy">
                  Installed Capacity
                </h3>
                <h5 className="mb-6">
                  {amountCarbonOffsetPerAnum}
                  &nbsp;<span>kWhrs</span>
                </h5>
                <h3 className="inline-block border-b text-navy border-navy">
                  Power Supply
                </h3>
                <h5 className="mb-6">{amountEnergyGeneratedPerAnum}&nbsp;</h5>
                <h3 className="inline-block border-b text-navy border-navy">
                  Location
                </h3>
                <h5 className="mb-6">{location}&nbsp;</h5>
              </div>
            </div>
            <div className="px-4 py-2 md:py-12">
              <div className="mx-auto md:max-w-3xl">
                {documentToReactComponents(document)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <LatestProjects />
    </Layout>
  )
}

export default Project

export const data = graphql`
  query ($currentPage: String!) {
    contentfulProject(slug: { eq: $currentPage }) {
      id
      title
      location
      amountCarbonOffsetPerAnum
      amountEnergyGeneratedPerAnum
      slug
      image {
        gatsbyImageData(quality: 80)
        title
      }
      projectContent {
        raw
      }
      projectExcerpt {
        projectExcerpt
      }
    }
  }
`
