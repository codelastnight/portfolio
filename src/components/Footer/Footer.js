import * as React from 'react'
import { Link } from 'gatsby'
import * as c from './footer.module.scss'
import Logo from './../Logo'
import BtnSpam from '../BtnSpam'
import Button from '../Button'

const Footer = ({ onOpen }) => {
  return (
    <footer className={`${c.footer__wrapper} reverse`}>
      <section className="grid v-margin6">
        <p className="col2">
          <Link to="/">back to top</Link>
        </p>
        <p className="col3 ">
          <Link to="/">back to top</Link>
        </p>
        <p className="col6 show__d">
          <Link to="/">back to top</Link>
        </p>
        <p className="col1__r justify__end show__d">
          <Link to="/">back to top</Link>
        </p>
      </section>
      <section className="grid ">
        <div className={`col2 end1__r relative ${c.fit} ${c.logo}`}>
          <BtnSpam
            color="#FF9023"
            className="show__d fg"
            onClick={() => onOpen()}
          >
             <p className='bold'>Contact Me</p>
          </BtnSpam>

          <div
            className={`fg show__m limit__s ${c.m__btn}`}
            onClick={() => onOpen()}
            onKeyPress={() => onOpen()}
            role="button"
            tabIndex="0"
          >
            <Button color="#FF9023" height="3em ">
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

        <div className={`col6__r `}>
          <p>
            <a href="https://www.instagram.com/art.last.night/">instagram</a>{' '}
          </p>
          <p>
            <a href="https://www.behance.net/artlastnight">behance</a>{' '}
          </p>
          <p>
            <a href="https://www.linkedin.com/in/not-simon/">linkedin</a>{' '}
          </p>
        </div>
        <div className={`col5__r `}>
          <p>©</p>
          <p>copyright</p>
          <p>2022</p>
        </div>
      </section>
      <section className="grid v-padding6 "></section>
      <section className="grid v-padding6 "></section>
    </footer>
  )
}

export default Footer
