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
})

export const content = style({
  margin: "auto",
  textAlign: "center",
  maxWidth: "640px",
  width: "100%",
  padding: "0 15px"
})

export const contentTitle = style({
  fontSize: "50px",
  fontWeight: "400",
  margin: "0 0 60px 0",

  "@media": {
    "screen and (max-width: 651px)": {
      fontSize: "30px",
      margin: "0 0 20px 0"
    },
  }
})

export const contentDescription = style({
  fontSize: "40px",
  "@media": {
    "screen and (max-width: 651px)": {
      fontSize: "20px"
    },
  }
})
