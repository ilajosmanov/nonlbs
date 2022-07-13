const path = require("path")
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                description
                width
                length
                price
                shoulders
                size
                sleeve
                waist
                rise
                images {
                  image1 {
                    childImageSharp {
                      gatsbyImageData(formats: [WEBP, AVIF, AUTO], layout: FULL_WIDTH)
                    }
                  }
                  image2 {
                    childImageSharp {
                      gatsbyImageData(formats: [WEBP, AVIF, AUTO], layout: FULL_WIDTH)
                    }
                  }
                  image3 {
                    childImageSharp {
                      gatsbyImageData(formats: [WEBP, AVIF, AUTO], layout: FULL_WIDTH)
                    }
                  }
                  image4 {
                    childImageSharp {
                      gatsbyImageData(formats: [WEBP, AVIF, AUTO], layout: FULL_WIDTH)
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve(`src/template/product.js`)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = node.frontmatter.title.toLowerCase().replaceAll(" ", "_")
    createPage({
      path: `/catalog/${path}`,
      component: blogPostTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        ...node.frontmatter,
        pagePath: `/catalog/${path}`,
      },
    })
  })
}
