import * as React from "react";
import { Link } from "gatsby";
import * as c from './footer.module.scss'
import Logo from './../Logo'
import Button from './../Button'

const buttonLoc  = [
  "col11__r row3 span2",
  `col8__r row4 span2`,
  `col7__r row3 span2`,
  `col5__r row2 span2`,
  `col3__r row5 span2`
]

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


            {
              buttonLoc.map((i) => (
                <Button className={i} height="3em" color="#FF9023">
                  <h4 className={''}>Contact Me</h4>
                </Button>
              )
            )}
           
            
            <div className={`col2 end1__r ${c.logo}`}>
              <Logo />
            </div>

        </section>
        <section className="grid v-padding6 ">
            <div className={`col2 `} >
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
        <section className="grid v-padding6 ">
               
        </section>
        <section className="grid v-padding6 ">
               
        </section>
      </footer>
    );
  }
};

export default Footer;
