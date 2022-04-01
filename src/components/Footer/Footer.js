import  React, {useRef} from 'react'
import * as c from './footer.module.scss'
import Logo from './../Logo'
import BtnSpam from '../BtnSpam'
import Button from '../Button'
import Modal from '../Modal'
import Contact from '../Contact'
import { Link , graphql, useStaticQuery } from 'gatsby'

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
            onClick={()=> ref.current.open()}
          >
             <p className='bold'>Contact Me</p>
          </BtnSpam>

          <div
            className={`fg show__m limit__s ${c.m__btn}`}
            onClick={() => ref.current.open()}
            onKeyPress={() => ref.current.open()}
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
      <Modal ref={ref}>
          <Contact onClose={() => ref.current.close()}  />
        </Modal>
    </footer>
  )
}

export default Footer
