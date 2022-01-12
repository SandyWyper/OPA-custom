import React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
// import { GatsbySeo } from "gatsby-plugin-next-seo"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import { BLOCKS } from "@contentful/rich-text-types"
// import RichTextImageBlock from "../components/richTextImageBlock"

const Project = props => {
  const {
    amountCarbonOffsetPerAnum,
    amountEnergyGeneratedPerAnum,
    title,
    image,
    projectContent,
    projectExcerpt,
  } = props.data.contentfulProject
  const imageData = getImage(image)

  //parse the contents of the rich-text data
  const document = JSON.parse(projectContent.raw)

  console.log(document)
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
        <div className={`container py-32 `}>
          <div className="bg-white md:grid md:grid-cols-2 ">
            <div className="mb-6 md:mb-0">
              <GatsbyImage image={imageData} alt={image.title} />
            </div>
            <div className="md:pl-4">
              <h1 className="text-navy">{title}</h1>
              <h3 className="inline-block border-b text-navy border-navy">
                Carbon Stored
              </h3>
              <h5 className="mb-6">
                {amountCarbonOffsetPerAnum}
                &nbsp;<span>tonnes per year</span>
              </h5>
              <h3 className="inline-block border-b text-navy border-navy">
                Electricity Generated
              </h3>
              <h5 className="mb-6">
                {amountEnergyGeneratedPerAnum}&nbsp;
                <span>KWatts per year</span>
              </h5>
            </div>
          </div>
          <div className="py-12 bg-white">
            <div className="mx-auto md:max-w-3xl">
              {documentToReactComponents(document)}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Project

export const data = graphql`
  query ($currentPage: String!) {
    contentfulProject(slug: { eq: $currentPage }) {
      id
      title
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
