import { style, styleVariants } from "@vanilla-extract/css";

import { colors } from '../../root.css';

const headerBase = style({
  padding: "30px",
  width: "100%",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  position: "sticky",
  left: 0,
  top: 0,
  zIndex: 2,


  "@media": {
    "screen and (max-width: 651px)": {
      flexFlow: "column nowrap",
      gap: "20px",
      padding: "10px"
    },
  }
})

export const header = styleVariants({
  light: [headerBase],
  dark: [headerBase, {background: "#fff"}]
})

export const logo = style({
  "@media": {
    "screen and (max-width: 651px)": {
      maxWidth: "120px"
    }
  }
})

export const navList = style({
  display: "flex",
  gap: "140px",
  margin: 0,
  padding: 0,
  listStyle: "none",

  "@media": {
    "screen and (max-width: 981px)": {
      gap: "51px",
    }
  }
})

const navLinkBase = style({
  textDecoration: "none",
  fontWeight: 700,
  fontSize: "32px",
  lineHeight: 1.15,
  transition: "color .1s ease-in-out",

  ":hover": {
    color: colors.primary
  },

  "@media": {
    "screen and (max-width: 651px)": {
      fontSize: "18px"
    }
  }
})

export const navLink = styleVariants({
  dark: [navLinkBase, {color: colors.black}],
  light: [navLinkBase, {color: colors.white}],
})
