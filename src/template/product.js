import React from "react"
import {getImage, GatsbyImage} from "gatsby-plugin-image"

import { ScrollPage } from "../components/scroll-page/scroll-page";

import { Footer } from '../widgets/footer/footer';
import { Header } from '../widgets/header/header';

import * as css from '../page-styles/product.css';
import { Button } from "../components/button/button";

const ProductPage = (props) => {
  return (
    <ScrollPage header={() => <Header color="dark" />} footer={() => <Footer color="dark" />}>
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
              <p>Length: {props.pageContext.length}cm</p>
              <p>Width: {props.pageContext.width}cm</p>
              <p>Shoulders: {props.pageContext.shoulders}cm</p>
              <p>Sleeve: {props.pageContext.sleeve}cm</p>
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
            Доставка до 7 робочих днів. На одязі можуть бути видні маленькі недоліки, тому що раніше мішки використовували для транспортування їжі.
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
            Доставка до 7 робочих днів. На одязі можуть бути видні маленькі недоліки, тому що раніше мішки використовували для транспортування їжі.
          </p>
        </section>
      </main>
    </ScrollPage>
  )
}

export default ProductPage
