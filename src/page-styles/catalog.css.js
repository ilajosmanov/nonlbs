import { style } from "@vanilla-extract/css";


export const productsList = style({
  width: "100%",

  display: "flex",

  "@media": {
    "screen and (max-width: 981px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  }
})

export const productsItem = style({
  overflow: "hidden",
  display: "block",
  height: "100%"
})

export const productsImage = style({
  transition: "transform .3s ease-in-out",

  ":hover": {
    transform: "scale(1.1)"
  }
})
