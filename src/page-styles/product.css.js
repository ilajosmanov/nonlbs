import { globalStyle, style } from "@vanilla-extract/css";
import { colors } from "../root.css";

export const main = style({
  flex: "1 0",
  overflowX: "auto",
  overflowY: "hidden",
  display: "flex",
  flexWrap: "wrap",
  fontSize: "36px",
  fontFamily: "'Oswald', sans-serif",

  "@media": {
    "screen and (max-width: 1181px)": {
      fontSize: "24px"
    },
    "screen and (max-width: 801px)": {
      flexFlow: "column nowrap",
      overflow: "initial",
      fontSize: "16px"
    }
  }
})

export const headline = style({
  width: "100%",
  paddingLeft: "50%",
  margin: "0 0 25px 0",
  lineHeight: "0.75",
  fontWeight: 'normal',
  fontSize: "36px",

  "@media": {
    "screen and (max-width: 801px)": {
      fontSize: "24px",
      paddingLeft: "15px",
      marginBottom: "25px",
      marginTop: "25px"
    }
  }
})

export const mainInformation = style({
  color: colors.black,
  lineHeight: 1.47,
  flex: "0 1 50%",
  padding: "0 30px",
  minWidth: "50%",
  fontSize: "inherit",
  display: "flex",
  flexFlow: "column nowrap",

  "@media": {
    "screen and (max-width: 801px)": {
      order: 2,
      width: "100%"
    }
  }
})

export const params = style({
  display: "flex",
  justifyContent: "space-between"
})

globalStyle(`${params} p`, {
  margin: 0,
  fontSize: "inherit",
})

export const galleryWrapper = style({
  width: "50%",
  minWidth: "50%",


  "@media": {
    "screen and (max-width: 801px)": {
      order: 1,
      width: "100%",
      padding: "0 15px"
    }
  }
})

export const gallery = style({
  flex: "1 0",
  display: "flex",
  margin: 0,
  padding: 0,
  listStyle: "none",

  "@media": {
    "screen and (max-width: 801px)": {
      width: "100%",
      overflowX: "auto"
    }
  }
})

export const galleryItem = style({
  flex: "1 0",
  minWidth: "420px",
  maxWidth: "420px",

  "@media": {
    "screen and (max-width: 801px)": {
      minWidth: "320px",
      maxWidth: "initial",
    }
  }
})

globalStyle(`${galleryItem} .gatsby-image-wrapper`, {
  width: "100%",
  height: "100%"
})

export const buyButton = style({
  width: "100%",
  marginTop: "auto",

  "@media": {
    "screen and (max-width: 801px)": {
      marginTop: "24px"
    }
  }
})

export const messageDesktop = style({
  whiteSpace: "nowrap",
  margin: "10px 0 0 0",
  fontSize: "18px",

  "@media": {
    "screen and (max-width: 801px)": {
      whiteSpace: "normal",
      marginBottom: "0",
      lineHeight: "0.5",
      opacity: "0"
    }
  }
})

export const messageMobile = style({
  display: "none",
  "@media": {
    "screen and (max-width: 801px)": {
      fontSize: "18px",
      whiteSpace: "normal",
      marginBottom: "0",
      display: "block"
    }
  }
})
