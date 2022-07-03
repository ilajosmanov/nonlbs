import { globalStyle, style } from "@vanilla-extract/css";
import { colors } from "../root.css";

export const main = style({
  flex: "1 0",
  overflowX: "auto",
  overflowY: "hidden",
  display: "flex",
  flexWrap: "wrap",
  fontSize: "36px",

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

export const mainInformation = style({
  color: colors.black,
  lineHeight: 1.47,
  flex: "0 1 50%",
  padding: "0 30px",
  minWidth: "50%",
  fontSize: "inherit",

  "@media": {
    "screen and (max-width: 801px)": {
      order: 2
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

globalStyle(`${galleryWrapper} h1`, {
  margin: "0 0 21px 0",
  fontWeight: 'normal',
  fontSize: "inherit",

  "@media": {
    "screen and (max-width: 801px)": {
      fontSize: "24px"
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
  marginTop: "81px",


  "@media": {
    "screen and (max-width: 801px)": {
      marginTop: "24px"
    }
  }
})

export const message = style({
  whiteSpace: "nowrap",
  margin: "10px 0 0 0",
  fontSize: "18px",

  "@media": {
    "screen and (max-width: 801px)": {
      whiteSpace: "normal",
      marginBottom: "24px"
    }
  }
})
