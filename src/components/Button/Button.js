import React from "react";
import * as c from './button.module.scss';
import * as s from 'Spectra';
const Button = ({
    width,
    height,
    radius,
    color,
    children
}) => {
    var colorOutline = s.Spectra(color);
	const newHue = (230 - colorOutline.hue()) * 0.2
	colorOutline.hue(colorOutline.hue() + newHue)
	

    return (
        <div tabindex="0"  className={c.button__outer} style={{minWidth: width, minHeight: height, borderRadius: radius, background: color}}>
            <div className={c.button__under}></div>
            <div className={c.button__highlight}></div>
            <div className={c.button__pressed}></div>
            <div className={c.text}>
                 {children}
            </div>
        </div>
    )

}


Button.defaultProps = {
    width: '0',
    height: '0',
    radius: '30rem',
    color: '#D7BEFF'
}
export default Button;