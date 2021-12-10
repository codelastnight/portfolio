import * as React from "react";
import { Link } from "gatsby";
import * as c from './footer.module.scss'
import Logo from './../Logo'
import Button from './../Button'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className={c.footer__wrapper}>
        <section className="grid v-margin6">
            <p className="col2">
              <a>back to top</a>
            </p>
            <p className="col3"> 
            <a>back to top</a>
            </p>
            <p className="col6">
            <a>back to top</a>
            </p>
            <p className="col1__r">
            <a>back to top</a>
            </p>
          </section>
        <section className="grid ">
            <Button className={`col11__r row2 span2`} height="3em" color="#FF9023"><h3 className={c.contact}>Contact Me</h3></Button>
            <Button className={`col8__r row4 span2`} height="3em" color="#FF9023"><h3 className={c.contact}>Contact Me</h3></Button>

            <Button className={`col7__r row3 span2`} height="3em" color="#FF9023"><h3 className={c.contact}>Contact Me</h3></Button>

            <Button className={`col5__r row2 span2`} height="3em" color="#FF9023"><h3 className={c.contact}>Contact Me</h3></Button>
            <Button className={`col3__r row5 span2`} height="3em" color="#FF9023"><h3 className={c.contact}>Contact Me</h3></Button>

            <div className={`col10__r span10 ${c.logo}`}>
              <Logo />
            </div>

        </section>
        <section className="grid v-padding6 ">
            <div className={`col10__r `} >
              <p>portfolio</p>
              </div>

              <div className={`col6__r `}>
                    <p><a href="https://www.instagram.com/art.last.night/">instagram</a> </p>
                    <p><a href="https://www.behance.net/artlastnight">behance</a> </p>
                    <p><a href="https://www.linkedin.com/in/not-simon/">linkedin</a> </p>
            </div>
            <div className={`col5__r `}>
                <p>©</p>
                <p>copyright</p>
                <p>2021</p>
            </div>

           

        </section>
      </footer>
    );
  }
};

export default Footer;
