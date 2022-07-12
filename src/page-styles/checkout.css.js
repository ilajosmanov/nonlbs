import { globalStyle, style } from "@vanilla-extract/css";

export const formWrapper = style({
  maxWidth: "869px",
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexFlow: "column nowrap",

  "@media": {
    'screen and (max-width: 1241px)': {
      maxWidth: "561px"
    },
    'screen and (max-width: 771px)': {
      maxWidth: "100%",
      padding: "0 10px"
    }
  },
})

export const closeButton = style({
  background: "none",
  border: "none",
  boxShadow: "none",
  width: "190px",
  height: "190px",
  cursor: "pointer",
  alignSelf: "flex-end",
  marginRight: "-190px",

  "@media": {
    'screen and (max-width: 1241px)': {
      width: "100px",
      height: "100px",
      marginRight: "-100px",
    },
    'screen and (max-width: 771px)': {
      marginRight: "-5px",
      width: "90px",
      height: "90px"
    }
  }
})

export const form = style({
  border: "20px solid #4064AC",
  background: "#EEEEEE",
  padding: "60px 120px",

  "@media": {
    'screen and (max-width: 1241px)': {
      padding: "20px 60px",
    },
    'screen and (max-width: 771px)': {
      borderWidth: "5px"
    }
  }
})

export const formLabel = style({
  display: "block",
  marginBottom: "40px",
  "@media": {
    'screen and (max-width: 1241px)': {
      marginBottom: "20px",
    }
  }
})

export const formInput = style({
  border: "1px solid #000",
  background: "#D9D9D9",
  padding: "28px 26px",
  width: "100%",
  fontSize: "36px",
  lineHeight: 1.13,

  "@media": {
    'screen and (max-width: 1241px)': {
      padding: "17px 15px",
      fontSize: "16px"
    }
  }
})

export const submitButton = style({
  width: "100%",
  marginTop: "120px",

  "@media": {
    'screen and (max-width: 1241px)': {
      marginTop: "40px",
      fontSize: "16px"
    }
  }
})

export const sr = style({
  position: "absolute",
  left: "-10000px",
  top: "auto",
  width: "1px",
  height: "1px",
  overflow: "hidden",
})

export const successContainer = style({
  textAlign: "center",
  display: "flex",
  flexFlow: "column nowrap"
})

globalStyle(`${successContainer} h1`, {
  margin: 0,
  fontWeight: 400,
  fontSize: "36px",

  "@media": {
    'screen and (max-width: 1241px)': {
      fontSize: "16px"
    }
  }
})
globalStyle(`${successContainer} p`, {
  margin: "24px 0 24px 0",
  fontWeight: 400,
  fontSize: "36px",

  "@media": {
    'screen and (max-width: 1241px)': {
      fontSize: "16px"
    }
  }
})

export const successIcon = style({
  maxWidth: "160px",
  width: "100%",
  margin: "45px auto",

  "@media": {
    'screen and (max-width: 771px)': {
      margin: "12px auto",
      maxWidth: "72px"
    }
  }
})
