import * as React from "react"
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { ScrollPage } from '../components/scroll-page/scroll-page';
import { Button } from '../components/button/button';
import { colors } from '../root.css';

import * as css from '../page-styles/checkout.css';

const CheckoutPage = (props) => {
  // const product = props.location.state.productName;

  const handleSumit = (e) => {
    e.preventDefault()
  }

  return (
    <ScrollPage background={colors.primary}>
      <div className={css.formWrapper}>
        <Link className={css.closeButton} to="/catalog">
          <StaticImage src="../images/close.svg" alt="Back to product page" />

          <span className={css.sr}>
            Back to product page
          </span>
        </Link>
        <form className={css.form} onSubmit={handleSumit}>
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
            label="Confirm"
            className={css.submitButton}
          />
        </form>
      </div>
    </ScrollPage>
  )
}

export default CheckoutPage
