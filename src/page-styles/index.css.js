import { style } from "@vanilla-extract/css";

export const page = style({
  display: "flex",
  flexFlow: "column nowrap"
})

export const video = style({
  width: "100%",
  height: "100vh",

  position: "fixed",
  left: 0,
  top: 0,
  objectFit: "cover"
})

export const footerWrapper = style({
  position: "relative",
  zIndex: 2,
  marginTop: "auto"
})
