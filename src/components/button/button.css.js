import { style, styleVariants } from "@vanilla-extract/css";
import { colors } from "../../root.css";

const buttonBase = style({
  border: "1px solid #000",
  color: "#000",
  fontSize: "36px",
  lineHeight: 1.47,
  padding: "13px",
  cursor: "pointer",
  display: "inline-block",
  textAlign: "center",
  textDecoration: "none",

  "@media": {
    'screen and (max-width: 651px)': {
      fontSize: "20px",
      padding: "10px",
      lineHeight: 1.2
    }
  }
})

export const button = styleVariants({
  primary: [buttonBase, {
    background: colors.primary
  }]
})
