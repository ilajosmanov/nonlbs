import React from 'react';

import * as css from './fullscreen-page.css';
import "../../global.css";

export const FullscreenPage = ({children, className, ...props}) => {
  return (
    <div
      className={`${css.fullscreen} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
