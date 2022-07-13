import * as React from "react"

import { ScrollPage } from '../components/scroll-page/scroll-page';

import { Footer } from '../widgets/footer/footer';
import { Header } from '../widgets/header/header';

import * as css from '../page-styles/about.css';
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <ScrollPage
      header={() => <Header color="light" noBackground />}
      footer={() => <Footer color="light" noBackground yellowColor />}
      background="#4064AC"
    >
      <Helmet title="About" defer={false} />
      <div className={css.descriptionContainer}>
        <p className={css.description}>
        non.Lbs. - upcycle brand that creates eco-friendly clothes made of vintage fabrics and recycled clothes.
        <br />
        The purpose of the brand is to create clothes without harming the planet and people.
        <br />
        The first two collections are made of vintage American bags from the 50s and 60s and recycled clothing.
        </p>
      </div>
    </ScrollPage>
  )
}

export default AboutPage
