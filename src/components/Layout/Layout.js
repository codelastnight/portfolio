import React, {
  useEffect,
} from 'react'
import { Helmet } from 'react-helmet'
import '../../fonts/PPNeueMontreal-Medium.woff2'
import useSiteMetadata from '../SiteMetadata'
import { withPrefix } from 'gatsby'
import * as classes from './layout.module.scss'

import loadable from '@loadable/component'
const Footer = loadable(() => import('../Footer'));
const Navbar = loadable(() => import('../Navbar'));

const Layout = ({ children, fgColor, bgColor }) => {
  const { title, description } = useSiteMetadata()

  function setColor(fg, bg) {
    const root = document.body

    if (!bg) bg = "var(--theme-purple)"
    if (!fg) fg = "var(--theme-blue)"

    root.style.setProperty('--c-fg', fg)
    root.style.setProperty('--c-bg', bg)

  }

  useEffect(() => {
    const root = document.documentElement

    const scrollbarWidth = window.innerWidth - document.body.clientWidth
    root.style.setProperty('--scrollbarWidth', `${scrollbarWidth}px`)
    //customcolor
    setColor(fgColor, bgColor)
    //console my info
    const style = "color:blue;font-family:'Neue Montreal', sans-serif; "
    console.clear()
    console.log("%c2023 Designed & Developed by Simon Zhang", `${style} font-size:3rem;`);
    console.log("%cGithub: https://github.com/codelastnight/portfolio", `${style} font-size:1.5rem;`);

    return () => {
      root.style.setProperty('--scrollbarWidth', `0px`)
    }
  })



  return (
    <div id="top" >
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />

      </Helmet>

      <Navbar />

      <div className={classes.layout__wrapper}>
        <div className={classes.layout__inner}>
          <main id="main" className="">{children}</main>
        </div>
      </div>
      <div
        className={`z5 relative ${classes.footer} ${classes.margintop} ${classes.layout__wrapper}`}
      >
        <div className={classes.layout__inner}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
