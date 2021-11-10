import React from "react";
import * as c from './button.module.scss';

//const s = require('spectra')
const Button = ({
    width,
    height,
    radius,
    color,
    className,
    children
}) => {
    // var colorOutline = s.Spectra(color);
	// const newHue = (230 - colorOutline.hue()) * 0.2
	// colorOutline.hue(colorOutline.hue() + newHue)
	

    return (
        <div className={className}>
<div tabindex="0"  className={`${c.button__outer} `} style={{width: width, height: height, borderRadius: radius, background: color, outlineColor: color}}>
            <div className={c.button__under}></div>
            <div className={c.button__highlight}></div>
            <div className={c.button__pressed}></div>
            <div className={c.text}>
                 {children}
            </div>
        </div>
        </div>
        
    )

}


Button.defaultProps = {
    width: '100%',
    height: 'inherit',
    radius: '30rem',
    color: '#D7BEFF',
    className: ""
}
export default Button;