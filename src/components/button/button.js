import { Link } from 'gatsby';
import React from 'react';

import * as css from './button.css';

export const Button = ({label, className = '', type = 'primary', tag = 'button', to, ...props}) => {
  return (
    tag === 'button' ? <button className={`${css.button[type]} ${className}`} {...props}>
      {label}
    </button>
    : <Link className={`${css.button[type]} ${className}`} to={to} {...props}>
      {label}
    </Link>
  )
}
