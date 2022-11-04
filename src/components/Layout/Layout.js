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

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()


  useEffect(() => {
    let root = document.documentElement

    const scrollbarWidth = window.innerWidth - document.body.clientWidth
    root.style.setProperty('--scrollbarWidth', `${scrollbarWidth}px`)

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
