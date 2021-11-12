
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
                </div>
            </div>
        </div>
    )
}

export default Navbot