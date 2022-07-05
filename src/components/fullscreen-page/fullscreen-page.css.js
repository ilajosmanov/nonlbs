import { style } from '@vanilla-extract/css';

export const fullscreen = style({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexFlow: "column nowrap",


  "@supports": {
    "(-webkit-touch-callout: none)": {
      minHeight: "-webkit-fill-available"
    }
  }
})
