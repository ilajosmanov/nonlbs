import React from 'react';

import * as css from './scroll-page.css';

export const ScrollPage = ({
  header,
  footer,
  children,
  background = "#fff"
}) => {
  return (
    <div className={css.page} style={{
      background
    }}>
      {header()}

      <main className={css.main}>
        {children}
      </main>

      {footer()}
    </div>
  )
}
