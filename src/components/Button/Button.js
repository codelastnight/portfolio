import React from "react";
import * as c from './button.module.scss';

//const s = require('spectra')
const Button = ({
    width,
    height,
    radius,
    color,
    className,
    style,
    children,
    tab
}) => {
    // var colorOutline = s.Spectra(color);
	// const newHue = (230 - colorOutline.hue()) * 0.2
	// colorOutline.hue(colorOutline.hue() + newHue)
	

    return (
        <div className={className} style={style} >
        <div tabIndex={tab ? "0" : null}  className={`${c.button__outer} `} style={{width: width, height: height, borderRadius: radius, background: color, borderColor: color}}>
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
    className: "",
    style: {transform: ""},
    tab: false
}
export default Button;