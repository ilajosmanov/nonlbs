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
  textDecoration: "none"
})

export const button = styleVariants({
  primary: [buttonBase, {
    background: colors.primary
  }]
})
