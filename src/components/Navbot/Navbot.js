
import React from "react";

import LogoIcon from '../LogoIcon';
import * as c from './navbot.module.scss'
const Navbot = () => {
    return (
        <div className={` ${c.nav__wrapper}`}>
            <div className={`${c.nav}`}>
    
                <div className="grid">
                    <div className={c.cycle}>
                        <LogoIcon />

                    </div>
                    <div className={`col2 ${c.links}`}>
                        <p><a href="https://www.instagram.com/art.last.night/">instagram</a> </p>
                        <p><a href="https://www.behance.net/artlastnight">behance</a> </p>
                        <p><a href="https://www.linkedin.com/in/not-simon/">linkedin</a> </p>
                    </div>
                    <div className={`col3  ${c.links}`}>
                        <p>©</p>
                        <p>copyright</p>
                        <p>2021</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbot