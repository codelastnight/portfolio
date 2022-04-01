import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'
import Modal from '../Modal'
import * as c from './expandimage.module.scss'
const ExpandImage = ({ imageInfo }) => {
  const [isOpen, setOpen] = useState(false)
  const ref = useRef()

  const open = () => {
    ref.current.open();
    setOpen(true)
  }
  const close = () => {
    ref.current.close();
    setOpen(false)
  }
  return (
    <React.Fragment >
      <button className={`${c.imgbtn}`} aria-expanded={isOpen} onClick={() => open()} onKeyPress={() => open()} >
          <Image imageInfo={imageInfo} />
      </button>
    <Modal ref={ref}>
      <div className={`${c.expanded} reverse`}>
        <button className={`z5 ${c.close} pseudolink`} onClick={() => close()} onKeyPress={() => close()}>
          <p className='white'>close</p>
          </button>
        <Image imageInfo={{...imageInfo, sizes: '80vw'}} />
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
