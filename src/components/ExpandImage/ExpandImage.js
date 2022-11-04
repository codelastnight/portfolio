import React, { useState, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'
import Modal from '../Modal'
import * as c from './expandimage.module.scss'
const ExpandImage = ({ imageInfo }) => {
  const [isOpen, setOpen] = useState(false)
  const [ratio, setRatio] = useState(1)
  const ref = useRef()
  const open = () => {
    ref.current.open();
    setOpen(true)
  }
  const close = () => {
    ref.current.close();
    setOpen(false)
  }

  const onImgLoad = useCallback((img) => {
    const { offsetHeight, offsetWidth } = img;
    setRatio(offsetWidth / offsetHeight)
  })
  return (
    <React.Fragment >
      <button className={`${c.imgbtn}`} aria-expanded={isOpen} onClick={() => open()} onKeyPress={() => open()} >
        <Image imageInfo={imageInfo} onThumbLoad={onImgLoad} />
      </button>
      <Modal ref={ref} title="Full Size Image">
        <div className={`${c.expanded} reverse`} style={{ maxWidth: `${95 * ratio}vmin` }}>
          <Image imageInfo={{ ...imageInfo, sizes: '80vw' }} />

          <button className={`z5 ${c.close} pseudolink`} onClick={() => close()} onKeyPress={() => close()}>
            <p className='white'>escape</p>
          </button>
        </div>
      </Modal>
    </React.Fragment>

  )

}

ExpandImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default ExpandImage
