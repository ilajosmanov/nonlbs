import * as React from "react"
import { graphql, Link } from "gatsby";
import {getImage, GatsbyImage} from "gatsby-plugin-image"

import { ScrollPage } from '../components/scroll-page/scroll-page';

import { Footer } from '../widgets/footer/footer';
import { Header } from '../widgets/header/header';

import { getData } from '../lib/getData';
import * as css from '../page-styles/catalog.css';

const CatalogPage = ({data}) => {
  const products = getData(data, 'products');
  console.log(products);
  return (
    <ScrollPage
      header={() => <Header color="dark" />}
      footer={() => <Footer color="dark" />}
    >
      <ul className={css.productsList}>
        {products.map(p => <li key={p.title}>
          <Link to="/" className={css.productsItem}>
            {p.cover[0]}
            <GatsbyImage
              className={css.productsImage}
              src={p.cover[0]}
              objectFit="contain"
              objectPosition="center"
              alt={p.title}
            />
          </Link>
        </li>)}
      </ul>
    </ScrollPage>
  )
}

export const CatalogPageQuery = graphql`
query Query {
  allMarkdownRemark(
    filter: { frontmatter:{templateKey:{eq:"product-page"}}}
  ) {
    edges {
      node {
        frontmatter {
          title
          cover
        }
      }
    }
  }
}
`

export default CatalogPage
