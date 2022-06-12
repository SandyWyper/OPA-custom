import * as React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Layout from "../components/layout"
import PageHero from "../components/pageHero"
import ProjectCard from "../components/projectCard"
import { graphql } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import RichTextImageBlock from "../components/richTextImageBlock"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Projects = ({
  data: {
    allContentfulProject: { nodes: allContentfulProject },
    contentfulProjectPage: { headerImage, title, introText },
  },
}) => {
  // parse the contents of the rich-text data
  const document = JSON.parse(introText.raw)

  // functions and options for dealing with images used in the rich-text area
  const getEntryWithId = entryId =>
    introText.references.filter(ref => ref.contentful_id === entryId)

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
        return <RichTextImageBlock data={getEntryWithId(data.target.sys.id)} />
      },
    },
  }

  return (
    <>
      <GatsbySeo
        title="projects"
        openGraph={{
          images: [
            {
              url: headerImage.resize.src,
              width: headerImage.resize.width,
              height: headerImage.resize.height,
              alt: headerImage.title,
            },
          ],
        }}
      />
      <Layout>
        <section className="py-32 page-wrapper">
          <div className={`bg-cream`}>
            <PageHero image={headerImage} title={title} />
            <div className="container">
              <div className="py-12 mx-auto md:max-w-6xl">
                {documentToReactComponents(document, options)}
              </div>
              <div className="md:grid md:grid-cols-2 gap-x-8 lg:grid-cols-3">
                {allContentfulProject.map(project => {
                  return (
                    <ProjectCard data={project} key={`card-${project.id}`} />
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Projects

export const data = graphql`
  query {
    allContentfulProject {
      nodes {
        title
        projectExcerpt {
          projectExcerpt
        }
        image {
          gatsbyImageData(
            layout: CONSTRAINED
            resizingBehavior: CROP
            aspectRatio: 1.5
            quality: 80
          )
        }
        id
        slug
      }
    }
    contentfulProjectPage {
      title
      headerImage {
        gatsbyImageData(quality: 80)
        resize(width: 1000) {
          width
          height
          src
        }
      }
      introText {
        raw
        references {
          gatsbyImageData
          title
          contentful_id
        }
      }
    }
  }
`
