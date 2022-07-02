import { style } from "@vanilla-extract/css";
import { colors } from "../root.css";

import Question from '../images/question.svg';

export const descriptionContainer = style({
  width: "100%",

  flex: "1 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 15px"
})

export const container = style({
  color: colors.white,
  textAlign: "center"
})

export const faqWrapper = style({
  maxWidth: "1024px",
  selectors: {
    '&:not(:first-child)': {
      marginTop: "44px"
    }
  }
})

export const title = style({
  fontSize: "32px",
  display: "inline-block",
  position: "relative",

  paddingLeft: "77px",

  selectors: {
    '&:before': {
      content: "",
      position: "absolute",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
      width: "44px",
      height: "44px",
      background: `${colors.primary} url(${Question}) center center no-repeat`,
      backgroundSize: "12px",
      borderRadius: "50%",
    },
  },

  "@media": {
    "screen and (max-width: 651px)": {
      fontSize: "20px",
      paddingLeft: "44px",

      selectors: {
        '&:before': {
          width: "32px",
          height: "32px",
        }
      }
    },
  }
})

export const description = style({
  fontSize: "24px",
  margin: "24px 0 0 0",

  "@media": {
    "screen and (max-width: 651px)": {
      fontSize: "16px"
    },
  }
})
