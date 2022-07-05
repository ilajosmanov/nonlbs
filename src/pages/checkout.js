import * as React from "react"
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { ScrollPage } from '../components/scroll-page/scroll-page';
import { Button } from '../components/button/button';
import { colors } from '../root.css';

import * as css from '../page-styles/checkout.css';

function makeFormData(payload) {
  const formData = new FormData();

  Object.keys(payload).forEach((key) => {
    if (typeof payload[key] !== 'undefined') {
      formData.append(key, payload[key]);
    }
  });

  return formData;
}

const CheckoutPage = (props) => {
  const [sent, setSent] = React.useState(false);
  const product = props.location.state.productName;

  const [statusLabel, settStatusLabel] = React.useState("Confirm");

  const handleSumit = (e) => {
    e.preventDefault()
    const body = new FormData(e.target)

    settStatusLabel("Sending...")

    fetch(e.target.action, {
      body: makeFormData({
        product,
        ...Object.fromEntries(body.entries())
      }),
      method: "POST",
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          setSent(true);
          e.target.reset();
        }
      })
      .catch(() => {
        settStatusLabel("Something happened...")
      })
      .finally(() => {
        setTimeout(() => {
          settStatusLabel("Confirm")
        }, 1000)
      })
  }

  return (
    <ScrollPage background={colors.primary}>
      <div className={css.formWrapper}>
        <Link className={css.closeButton} to={`/catalog/${product.toLowerCase().replaceAll(" ", "_")}`}>
          <StaticImage src="../images/close.svg" alt="Back to product page" />

          <span className={css.sr}>
            Back to product page
          </span>
        </Link>
        {sent ? <div className={[css.form, css.successContainer].join(" ")}>
          <div>
            <h1>Coool ❤️</h1>
            <p>
              We're already going to chat with you and send your item!
            </p>
          </div>
          <div className={css.successIcon}>
            <svg viewBox="0 0 115 121" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M71.5417 56.0416C62.7548 45.294 54.1282 34.3044 44.5027 24.2815C40.3194 19.9255 35.7633 15.6142 30.2322 13.0152C22.0533 9.17216 12.2754 7.1329 3.62236 4.75332C-2.73323 3.00553 4.48351 9.46571 5.87561 11.4058C15.976 25.4818 25.1658 40.1107 34.7387 54.5394C48.9661 75.9836 64.8655 96.8003 82.7543 115.377C84.1786 116.856 90.1216 123.639 90.748 117.845C93.8607 89.0521 102.42 61.8566 108.72 33.6164C110.649 24.9706 111.407 20.7134 112.798 12.4251C112.878 11.9487 114.333 4.52252 113.924 2.66102C112.623 -3.2667 103.58 9.36228 99.7073 14.0346C88.4677 27.5935 79.2547 42.5406 69.6104 57.0072" stroke="black" stroke-linecap="round"/>
            </svg>
          </div>

          <Button
            to="/catalog"
            tag="link"
            label="Ok"
            className={css.submitButton}
          />
        </div> : <form
          className={css.form}
          onSubmit={handleSumit}
          action="https://formspree.io/f/mgedjeaa"
        >
          <label className={css.formLabel}>
            <span className={css.sr}>
              Full Name
            </span>
            <input required name="name" placeholder="Full Name" className={css.formInput} />
          </label>
          <label className={css.formLabel}>
            <span className={css.sr}>
              Tel:
            </span>
            <input required name="phone" placeholder="Phone" type="tel" className={css.formInput} />
          </label>
          <label className={css.formLabel}>
            <span className={css.sr}>
              E-mail
            </span>
            <input required name="email" placeholder="Email" type="email" className={css.formInput} />
          </label>

          <Button
            label={statusLabel}
            className={css.submitButton}
          />
        </form>}

      </div>
    </ScrollPage>
  )
}

export default CheckoutPage
