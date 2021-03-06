import React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { BLOCKS } from "@contentful/rich-text-types"
import RichTextImageBlock from "../components/richTextImageBlock"
import LatestProjects from "../components/latestProjects"
import { StaticImage } from "gatsby-plugin-image"
import { BlogPostJsonLd } from "gatsby-plugin-next-seo"

const Project = ({ data }) => {
  const {
    amountCarbonOffsetPerAnum,
    amountEnergyGeneratedPerAnum,
    title,
    image,
    projectContent,
    location,
    projectExcerpt,
    slug,
  } = data.contentfulProject

  // parse the contents of the rich-text data
  const document = JSON.parse(projectContent.raw)

  // functions and options for dealing with images used in the rich-text area
  const getEntryWithId = entryId =>
    projectContent.references.filter(ref => ref.contentful_id === entryId)

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
        return <RichTextImageBlock data={getEntryWithId(data.target.sys.id)} />
      },
    },
  }

  return (
    <>
      <BlogPostJsonLd
        url={`https://oneplanetassociates.com/${slug}`}
        title={title}
        images={[
          {
            url: `https:${image.resize.src}`,
            width: image.resize.width,
            height: image.resize.height,
            alt: image.title,
          },
        ]}
        authorName="Gareth Davies"
        publisherName="One Planet Associates Ltd"
        description={projectExcerpt.projectExcerpt}
      />
      <GatsbySeo
        title={`OPA - ${title}`}
        description={projectExcerpt.projectExcerpt}
        openGraph={{
          images: [
            {
              url: image.resize.src,
              width: image.resize.width,
              height: image.resize.height,
              alt: image.title,
            },
          ],
        }}
      />
      <Layout>
        <section className="page-wrapper">
          <div className={`pt-32`}>
            <div className="pb-32 bg-cream">
              <div className="lg:grid lg:grid-cols-2">
                <div className="mb-6 lg:mb-0">
                  <GatsbyImage
                    image={getImage(image)}
                    alt={image.title}
                    className="w-full h-full"
                  />
                </div>
                <div className="px-4 lg:p-8">
                  <h1 className="text-4xl text-navy lg:text-5xl lg:pt-6">
                    {title}
                  </h1>
                  <div className="mb-8 lg:mb-0">
                    {amountCarbonOffsetPerAnum && (
                      <div className="flex items-center mb-4 xl:mb-6">
                        <StaticImage
                          className={`w-12 mr-4`}
                          src={`../images/green-power.png`}
                          alt="Green energy icon"
                        />
                        <div>
                          <h6 className="mb-0">Installed Capacity</h6>
                          <p className="mb-0 text-lg">
                            {amountCarbonOffsetPerAnum}
                            &nbsp;<span>kW</span>
                          </p>
                        </div>
                      </div>
                    )}
                    {amountEnergyGeneratedPerAnum && (
                      <div className="flex items-center mb-4 xl:mb-6">
                        <StaticImage
                          className={`w-12 mr-4`}
                          src={`../images/home-icon-2.png`}
                          alt="Homes powered icon"
                        />
                        <div>
                          <h6 className="mb-0">Homes Powered Per Annum</h6>
                          <p className="mb-0 text-lg">
                            {amountEnergyGeneratedPerAnum}&nbsp;
                          </p>
                        </div>
                      </div>
                    )}
                    {location && (
                      <div className="flex items-center mb-4 xl:mb-6">
                        <StaticImage
                          className={`w-12 mr-4`}
                          src={`../images/map.png`}
                          alt="Map pin icon"
                        />
                        <div>
                          <h6 className="mb-0">Location</h6>
                          <p className="mb-0 text-lg">{location}&nbsp;</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 md:py-12">
                <div className="mx-auto md:max-w-3xl">
                  {documentToReactComponents(document, options)}
                </div>
              </div>
            </div>
          </div>
        </section>
        <LatestProjects />
      </Layout>
    </>
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
        gatsbyImageData(sizes: "(min-width: 1024px) 50vw, 100vw", quality: 70)
        title
        resize(width: 1000) {
          width
          height
          src
        }
      }
      projectContent {
        raw
        references {
          gatsbyImageData
          title
          contentful_id
        }
      }
      projectExcerpt {
        projectExcerpt
      }
    }
  }
`
