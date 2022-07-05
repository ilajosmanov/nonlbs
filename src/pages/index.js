import * as React from "react"

import { FullscreenPage } from '../components/fullscreen-page/fullscreen-page';
import { Footer } from "../widgets/footer/footer";
import { Header } from "../widgets/header/header";

import BackgroundVideo from '../images/background.mp4';
import BackgroundVideoMobile from '../images/background_mobile.mp4';
import BackgroundVideoMobileWebm from '../images/background_mobile.webm';
import BackgroundVideoWebm from '../images/background.webm';

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
          src={BackgroundVideoMobile}
          type="video/mp4"
          media="(max-width: 768px)"
        />
        <source
          src={BackgroundVideoMobileWebm}
          type="video/webm"
          media="(max-width: 768px)"
        />
        <source
          src={BackgroundVideoWebm}
          type="video/webm"
        />
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
