import * as React from "react"

import { ScrollPage } from '../components/scroll-page/scroll-page';

import { Footer } from '../widgets/footer/footer';
import { Header } from '../widgets/header/header';

import * as css from '../page-styles/faq.css';
import { Helmet } from "react-helmet";

const faq = [
  {
    title: "How do I receive my order?",
    description: "We send clothes across Ukraine and abroad by post office. Estimated delivery time is up to 7 business days."
  },
  {
    title: "Can I return the product?",
    description: "Yes. You can contact us within two weeks via Instagram or mail non.lbs.clth@gmail.com and return the product."
  },
  {
    title: "I still have a question",
    description: "Contact us via Instagram or mail non.lbs.clth@gmail.com 🙂"
  }
]

const FaqPage = () => {
  return (
    <ScrollPage
      header={() => <Header color="light" noBackground />}
      footer={() => <Footer color="light" noBackground />}
      background="#FF6754"
    >
      <Helmet title="Q&A" defer={false} />
      <div
        className={css.descriptionContainer}>
        <dl className={css.container}>
          {faq.map(item => <div
            key={item.title}
            className={css.faqWrapper}
          >
            <dt className={css.title}>
              {item.title}
            </dt>
            <dd className={css.description}>
              {item.description}
            </dd>
          </div>)}
        </dl>
      </div>
    </ScrollPage>
  )
}

export default FaqPage
