import React from 'react';
import {Link} from 'gatsby';

import {Logo} from '../../components/logo/logo';
import * as css from './header.css';

const nav = [
  {
    title: "Shop",
    to: "/catalog"
  },
  {
    title: "About",
    to: "/about"
  },
  {
    title: "FAQ",
    to: "/faq"
  },
]

export const Header = ({color = "light"}) => {
  return (
    <header className={css.header[color]}>
      <div className={css.logo}>
        <Logo color={color} />
      </div>

      <nav>
        <ul className={css.navList}>
          {nav.map(item => <li key={item.to}>
            <Link to={item.to} className={css.navLink[color]}>
              {item.title}
            </Link>
          </li>)}
        </ul>
      </nav>
    </header>
  )
}
