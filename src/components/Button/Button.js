import React from 'react'
import * as c from './button.module.scss'

//const s = require('spectra')
const Button = ({
  width,
  height,
  radius,
  color,
  bgcolor,
  className,
  style,
  children,
  isDark
}) => {
  return (
    <div className={className} style={style}>
      <div
        className={`${c.button__outer} z1`}
        style={{
          width: width,
          height: height,
          borderRadius: radius,
          color: color ? color : 'currentColor',
          background: bgcolor,
          borderColor: bgcolor,
        }}
      >

        <div className={c.button__under}></div>
        <div className={c.button__highlight}></div>
        <div className={c.button__pressed}></div>
        <div className={`${c.text} z5 ${isDark && c.dark}`}>{children}</div>

      </div>
    </div>
  )
}

Button.defaultProps = {
  width: '100%',
  height: 'inherit',
  radius: '30rem',
  bgcolor: '#D7BEFF',
  className: '',
  style: { transform: '' },
  isDark: false
}
export default Button
