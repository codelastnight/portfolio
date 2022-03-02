import React from 'react'
import * as c from './button.module.scss'

//const s = require('spectra')
const Button = ({
  width,
  height,
  radius,
  color,
  className,
  style,
  children,
}) => {
  return (
    <div className={className} style={style}>
      <div
        className={`${c.button__outer} z1`}
        style={{
          width: width,
          height: height,
          borderRadius: radius,
          background: color,
          borderColor: color,
        }}
      >

        <div className={c.button__under}></div>
        <div className={c.button__highlight}></div>
        <div className={c.button__pressed}></div>
        <div className={`${c.text} z5`}>{children}</div>

      </div>
    </div>
  )
}

Button.defaultProps = {
  width: '100%',
  height: 'inherit',
  radius: '30rem',
  color: '#D7BEFF',
  className: '',
  style: { transform: '' },
}
export default Button
