import * as React from "react";
import { Link } from "gatsby";
import * as c from './footer.module.scss'
import Logo from './../Logo'
import Button from './../Button'
import BtnSpam from "../BtnSpam";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className={`${c.footer__wrapper} reverse`}>
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

           
            
            <div className={`col2 end1__r relative ${c.logo}`}>
           
              <BtnSpam color="#FF9023">
                <h3>Contact Me</h3>
              </BtnSpam>
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
