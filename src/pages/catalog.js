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
  return (
    <ScrollPage
      header={() => <Header color="dark" />}
      footer={() => <Footer color="dark" />}
    >
      <ul className={css.productsList}>
        {products.map(p => <li key={p.title}>
          <Link to="/" className={css.productsItem}>
            <GatsbyImage
              className={css.productsImage}
              image={getImage(p.images[0].image1)}
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
          images {
            image1 {
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

export default CatalogPage
