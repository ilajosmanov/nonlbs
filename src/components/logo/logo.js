import React from 'react';
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"

export const Logo = ({color}) => {
  return (
    <Link to="/">
      {color === "light" ?
        <StaticImage
          src="../../images/logo-light.svg"
          alt="non.Lbs Logo"
          placeholder="tracedSVG"
        /> :
        <StaticImage
          src="../../images/logo-dark.svg"
          alt="non.Lbs Logo"
          placeholder="tracedSVG"
        />
      }
    </Link>
  )
}
