const path = require("path")

exports.createPages = async ({graphql, actions}) => {
  const {data} = await graphql(`
    query Catalog {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: '/catalog/' + node.frontmatter.slug,
      component: path.resolve('./src/template/product.js'),
      context: {
        slug: node.frontmatter.slug
      }
    })
  })
}
