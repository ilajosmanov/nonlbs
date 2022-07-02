import { style } from "@vanilla-extract/css";

export const page = style({
  width: "100%",
  minHeight: "100vh",

  display: "flex",
  flexFlow: "column nowrap"
})

export const main = style({
  flex: "1 0",
  display: "flex",
  flexFlow: "column",

  padding: "15px 0"
})
