import React, { useRef } from 'react'
import * as c from './footer.module.scss'
import Logo from './../Logo'
import Button from '../Button'
import Modal from '../Modal'
import loadable from '@loadable/component'

import { Link, graphql, useStaticQuery } from 'gatsby'
const Contact = loadable(() => import('../Contact'));
const BtnSpam = loadable(() => import('../BtnSpam'));


const Footer = () => {
  const ref = useRef();
  const data = useStaticQuery(graphql`
    query FooterQuery {
      markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
        frontmatter {
          social_links {
            prettyLink
            url
          }
        }
      }
    }
`)
  const socials = data.markdownRemark.frontmatter.social_links
  return (
    <footer className={`${c.footer__wrapper} reverse`}>
      <section className="grid v-margin6">
        <p className="col2">
          <Link to="#main">back to top</Link>
        </p>
        <p className="col3 ">
          <Link to="#main" aria-hidden="true" tabindex="-1">back to top</Link>
        </p>
        <p className="col6 show__d">
          <Link to="#main" aria-hidden="true" tabindex="-1">back to top</Link>
        </p>
        <p className="col1__r justify__end show__d">
          <Link to="#main" aria-hidden="true" tabindex="-1">back to top</Link>
        </p>
      </section>
      <section className="grid ">
        <div className={`col2 end1__r relative ${c.fit} ${c.logo}`}>
          <BtnSpam
            color="#FF9023"
            className="show__d "
            onClick={() => ref.current.open()}
            style={{ color: 'black' }}
          >
            <p className='bold' >Contact Me</p>
          </BtnSpam>

          <div
            className={`fg show__m limit__s ${c.m__btn}`}
            onClick={() => ref.current.open()}
            onKeyPress={() => ref.current.open()}
            role="button"
            tabIndex="0"
          >
            <Button color={'black'} bgcolor="#FF9023" height="3em ">
              <p className='bold'>Contact Me</p>
            </Button>
          </div>

          <Logo />
        </div>
      </section>
      <section className="grid v-padding6 ">
        <div className={`col2 `}>
          <p>portfolio</p>
        </div>
        <a className={`col3 end4 `} href="https://github.com/codelastnight/portfolio">Github Source</a>

        <div className={`col6__r `}>

          {socials.map((link, i) =>
            <p key={i}>
              <a href={link.url}>{link.prettyLink}</a>{' '}
            </p>
          )}


        </div>
        <div className={`col5__r `}>
          <p>©</p>
          <p>copyright</p>
          <p>2022</p>
        </div>
      </section>
      <section className="grid v-padding6 "></section>
      <section className="grid v-padding6 "></section>
      <Modal ref={ref} title="Contact Me">
        <Contact onClose={() => ref.current.close()} />
      </Modal>
    </footer>
  )
}

export default Footer
