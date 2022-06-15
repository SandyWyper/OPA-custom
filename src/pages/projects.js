import * as React from "react"
import { GatsbySeo, BlogJsonLd } from "gatsby-plugin-next-seo"
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
  const schemaPosts = []
  allContentfulProject.forEach(project => {
    schemaPosts.push({
      headline: project.title,
      image: `https:${project.image.gatsbyImageData.images.fallback.src}`,
    })
  })

  return (
    <>
      <GatsbySeo
        title="projects"
        openGraph={{
          images: [
            {
              url: `https:${headerImage.resize.src}`,
              width: headerImage.resize.width,
              height: headerImage.resize.height,
              alt: headerImage.title,
            },
          ],
        }}
      />
      <BlogJsonLd
        url="https://oneplanetassociates.com/projects"
        headline="One Planet Associates past projects"
        images={`https:${headerImage.resize.src}`}
        posts={schemaPosts}
        authorName="One Planet Associates"
        description="One planet Associates example projects. A variety of case studies looking into the different planning and renewables procurement services. OPA can manage the whole planning process, from early-stage site conception and preparation of pre-planning documents through to securing decisions and discharging planning conditions. OPA pride itself on managing stakeholders effectively and ensuring a transparent service from start to finish."
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
      }
    }
  }
`
