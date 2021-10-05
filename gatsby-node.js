// ------------------------------------- tool for console.logging some data to the terminal
// const util = require("util")
// console.log(
//   util.inspect(thing, {
//     showHidden: false,
//     depth: null,
//   })
// )

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const projectTemplate = require.resolve("./src/templates/project.js")

  const projectQueryResult = await graphql(`
    query {
      allContentfulProject {
        totalCount
        nodes {
          title
          slug
        }
      }
    }
  `)

  // Handle errors
  if (projectQueryResult.errors) {
    reporter.panicOnBuild(
      `Error while running GraphQL query.`,
      JSON.stringify(projectQueryResult.errors)
    )
    return
  }
  const projects = projectQueryResult.data.allContentfulProject.nodes
  const numProjects = projectQueryResult.data.allContentfulProject.totalCount

  projects.forEach((project, i) => {
    createPage({
      path: `/${project.slug}`,
      component: projectTemplate,
      context: {
        currentPage: i + 1,
        prev: i === 0 ? null : projects[i - 1].slug,
        next: i === numProjects - 1 ? null : projects[i + 1].slug,
      },
    })
  })
}
