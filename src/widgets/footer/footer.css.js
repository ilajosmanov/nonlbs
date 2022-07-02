import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { colors } from '../../root.css';

const footerBase = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "30px",

  "@media": {
    "screen and (max-width: 651px)": {
      flexFlow: "column nowrap",
      gap: "20px",
      padding: "10px"
    },
  }
})

export const footer = styleVariants({
  light: [footerBase, {background: "rgba(0, 0, 0, .1)"}],
  dark: [footerBase]
})

export const contacts = style({
  fontStyle: "normal"
})

export const contactsList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,

  display: "flex",
  gap: "24px"
})

const contactsLinkBase = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
})

export const contactsLink = styleVariants({
  light: [contactsLinkBase, {color: colors.white}],
  dark: [contactsLinkBase, {color: colors.black}],
})

const contactsIconBase = style({
  width: "50px",
  height: "50px",
  transition: "fill .1s ease-in-out",

  ':hover': {
    fill: colors.primary
  }
})

export const contactsIcon = styleVariants({
  light: [contactsIconBase, {fill: colors.white}],
  dark: [contactsIconBase, {fill: colors.black}],
})

export const copyright = style({
  fontSize: "36px",
  lineHeight: 1.13,

  "@media": {
    "screen and (max-width: 651px)": {
      fontSize: "18px"
    },
  }
})

globalStyle(`${copyright} span:first-child`, {
  color: "#4064AC"
})
globalStyle(`${copyright} span:last-child`, {
  color: "#F1D862"
})
