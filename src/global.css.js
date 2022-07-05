import { globalStyle } from "@vanilla-extract/css"

globalStyle('*, *::before, *::after', {
  boxSizing: "border-box"
})

globalStyle('html, body', {
  width: "100%",
  minHeight: "100vh"
})

globalStyle('body', {
  margin: 0,
  WebkitFontSmoothing: `antialiased`,
  fontSize: "16px",
  fontFamily: "Helvetica",
  minHeight: "100vh",

  "@supports": {
    "-webkit-touch-callout: none": {
      height: "-webkit-fill-available"
    }
  }
})

globalStyle(`img, picture, video, canvas, svg`, {
  display: `block`,
  maxWidth: `100%`
})

globalStyle(`input, button, textare, select`, {
  font: `inherit`,
})

globalStyle(`input, button, textare, select`, {
  font: `inherit`
})
