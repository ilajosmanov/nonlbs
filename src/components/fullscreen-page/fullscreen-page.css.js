import { style } from '@vanilla-extract/css';

export const fullscreen = style({
  width: "100%",
  "min-height": "-webkit-fill-available",
  minHeight: "100vh",
  display: "flex",
  flexFlow: "column nowrap"
})
