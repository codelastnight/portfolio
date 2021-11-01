import React from "react";
import { Link } from "gatsby";
import * as c from './navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={`grid ${c.nav}`}>
      <Link className={c.link1}>
        <p>work</p>
      </Link>
      <Link>
        <p>playground</p>
      </Link>
      <Link  className={c.link3}>
        <p>about</p>
      </Link>
      <Link>
        <p>contact</p>
      </Link>
    </nav>
  )
}

export default Navbar;
