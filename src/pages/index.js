import * as React from "react"

import { FullscreenPage } from '../components/fullscreen-page/fullscreen-page';
import { Footer } from "../widgets/footer/footer";
import { Header } from "../widgets/header/header";

import BackgroundVideo from '../images/background.mp4';

import * as css from '../page-styles/index.css';

const IndexPage = () => {
  return (
    <FullscreenPage className={css.page}>
      <Header />

      <video
        autoPlay
        muted
        loop
        className={css.video}
      >
        <source
          src={BackgroundVideo}
          type="video/mp4"
        />
      </video>

      <div className={css.footerWrapper}>
        <Footer color="light" />
      </div>
    </FullscreenPage>
  )
}

export default IndexPage
