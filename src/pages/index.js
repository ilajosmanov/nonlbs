import * as React from "react"

import { FullscreenPage } from '../components/fullscreen-page/fullscreen-page';
import { Footer } from "../widgets/footer/footer";
import { Header } from "../widgets/header/header";

// import BackgroundVideo from '../images/background.mp4';
// import BackgroundVideoMobile from '../images/background_mobile.mp4';
// import BackgroundVideoMobileWebm from '../images/background_mobile.webm';
// import BackgroundVideoWebm from '../images/background.webm';

import * as css from '../page-styles/index.css';

const IndexPage = () => {
  return (
    <FullscreenPage className={css.page}>
      <Header color="dark" />
      <div className={css.content}>
        <h1 className={css.contentTitle}>
          Let's Be Slow
        </h1>

        <p className={css.contentDescription}>
          you can wear what you like
          and save the planet
        </p>
      </div>

      <div className={css.footerWrapper}>
        <Footer color="dark" />
      </div>
    </FullscreenPage>
  )
}

export default IndexPage
