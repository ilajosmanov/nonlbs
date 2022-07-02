export function getData(query, key) {
  return query.allMarkdownRemark.edges.map(({node}) => node.frontmatter)
}
