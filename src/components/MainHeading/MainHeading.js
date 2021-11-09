import * as c from './mainheading.module.scss';
import React from "react";

const MainHeading = ({}) => {
    return (
        <section className={`grid ${c.mainheading}`} > 
            <h1 className={`${c.row1} ${c.col2} ${c.span2}`}>I'm a</h1>
            <h1 className={`${c.row2} ${c.col4} ${c.span4}`}>designer</h1>
            <h1 >®</h1>
            <h1 className={`${c.row3} ${c.col3} ${c.span4}`}>(of sorts)</h1>
        </section>
    )

}

export default MainHeading;