import { style } from "@vanilla-extract/css";
import { colors } from "../root.css";

export const descriptionContainer = style({
  width: "100%",

  flex: "1 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 15px"
})

export const description = style({
  fontSize: "32px",
  textAlign: "center",
  marginTop: "24px",
  lineHeight: 1.24,
  color: colors.white,

  "@media": {
    "screen and (max-width: 651px)": {
      fontSize: "18px"
    },
  }
})
