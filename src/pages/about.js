import * as React from "react"

import { ScrollPage } from '../components/scroll-page/scroll-page';

import { Footer } from '../widgets/footer/footer';
import { Header } from '../widgets/header/header';

import * as css from '../page-styles/about.css';

const AboutPage = () => {
  return (
    <ScrollPage
      header={() => <Header color="light" />}
      footer={() => <Footer color="light" />}
      background="#4064AC"
    >
      <div className={css.descriptionContainer}>
        <p className={css.description}>
          non.Lbs. - апсайкл бренд, який створює екологічний одяг <br />
          з вінтажних тканин та одягу вторинного використання.
          <br />
          <br />
          Мета бренду - створювати, не приносячи шкоди планеті
          та людям. <br />
          Перші дві колекції зроблені з вінтажних американських мішків <br />
          50-60-х років та з переробленего одягу.
        </p>
      </div>
    </ScrollPage>
  )
}

export default AboutPage
