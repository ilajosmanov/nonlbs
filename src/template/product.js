import React from "react"
import {getImage, GatsbyImage} from "gatsby-plugin-image"

import { ScrollPage } from "../components/scroll-page/scroll-page";

import { Footer } from '../widgets/footer/footer';
import { Header } from '../widgets/header/header';

import * as css from '../page-styles/product.css';
import { Button } from "../components/button/button";
import { Helmet } from "react-helmet";

const params = {
  width: "Width",
  length: "Length",
  shoulders: "Shoulders",
  sleeve: "Sleeve",
  waist: "Waist",
  rise: "Rise"
}

const ProductPage = (props) => {
  return (
    <ScrollPage header={() => <Header color="dark" />} footer={() => <Footer color="dark" />}>
      <Helmet title={props.pageContext.title} defer={false} />
      <main className={css.main}>
        <h1 className={css.headline}>{props.pageContext.title}</h1>
        <div className={css.mainInformation}>
          <div className={css.params}>
            <div>
              <p>Price:</p>
              <p>
                {props.pageContext.price}
              </p>
            </div>
            <div>
              <p>Size:</p>
              <p>
                {props.pageContext.size}
              </p>
            </div>
            <div>
              {Object.keys(params).map(param => <p key={param}>
                {props.pageContext[param] && props.pageContext[param] !== "0" && <>
                  {params[param]}: {props.pageContext[param]}cm
                </>}
              </p>)}
            </div>
          </div>

          <p dangerouslySetInnerHTML={{
            __html: props.pageContext.description.replace(/\n/g, '<br />')
          }}>
          </p>

          <Button
            className={css.buyButton}
            label="Buy now"
            tag="link"
            to="/checkout"
            state={{
              productName: props.pageContext.title
            }}
          />
          <p className={css.messageMobile}>
            Delivery is up to 7 working days. Small flaws may be visible on the clothes, because the vintage fabrics were previously used to transport food.
          </p>
        </div>

        <section className={css.galleryWrapper}>
          <ul className={css.gallery}>
            {
              Object.values(props.pageContext.images[0])
                .filter(Boolean)
                .map((image, idx) => <li
                  key={idx}
                  className={css.galleryItem}
                >
                    <GatsbyImage
                      image={getImage(image)}
                      objectFit="cover"
                      objectPosition="center"
                      alt={props.pageContext.title}
                    />
                 </li>)
            }
          </ul>
          <p className={css.messageDesktop}>
            Delivery is up to 7 working days. Small flaws may be visible on the clothes, because the vintage fabrics were previously used to transport food.
          </p>
        </section>
      </main>
    </ScrollPage>
  )
}

export default ProductPage
