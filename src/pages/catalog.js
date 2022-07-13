import * as React from "react"
import { graphql, Link } from "gatsby";
import Masonry from 'react-masonry-css'
import {getImage, GatsbyImage} from "gatsby-plugin-image"

import { ScrollPage } from '../components/scroll-page/scroll-page';

import { Footer } from '../widgets/footer/footer';
import { Header } from '../widgets/header/header';

import { getData } from '../lib/getData';
import * as css from '../page-styles/catalog.css';
import { Helmet } from "react-helmet";

const breakpointColumns = {
  default: 3,
  981: 2,
};

const CatalogPage = ({data}) => {
  const products = getData(data, 'products');

  return (
    <ScrollPage
      header={() => <Header color="dark" />}
      footer={() => <Footer color="dark" />}
    >
      <Helmet title="Products" defer={false} />
      <Masonry
        breakpointCols={breakpointColumns}
        className={css.productsList}
      >
        {products.map(p => <div key={p.title}>
          <Link
            to={`/catalog/${p.title.toLowerCase().replaceAll(" ", "_")}`}
            className={css.productsItem}
          >
            <GatsbyImage
              className={css.productsImage}
              image={getImage(p.images[0].image1)}
              objectFit="contain"
              objectPosition="center"
              alt={p.title}
            />
          </Link>
        </div>)}
      </Masonry>

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
