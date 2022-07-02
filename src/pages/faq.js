import * as React from "react"

import { ScrollPage } from '../components/scroll-page/scroll-page';

import { Footer } from '../widgets/footer/footer';
import { Header } from '../widgets/header/header';

import * as css from '../page-styles/faq.css';

const faq = [
  {
    title: "Як я отримаю замовлення?",
    description: "Відправляємо одяг по Україні та за кордон поштою. Приблизний термін доставки - до 7 робочих днів."
  },
  {
    title: "Чи можна повернути товар?",
    description: "Так. Протягом двох тижнів Ви можете написати нам в Інстаграм або на пошту non.lbs.clth@gmail.com і повернути товар."
  },
  {
    title: "Маю інше запитання",
    description: "Пишіть в Інстаграмі або на пошту 🙂"
  }
]

const FaqPage = () => {
  return (
    <ScrollPage
      header={() => <Header color="light" />}
      footer={() => <Footer color="light" />}
      background="#FF6754"
    >
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
