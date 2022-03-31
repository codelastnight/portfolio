import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import * as c from './image.module.scss'

const dynImg = (image) => {
  image = `${image}-/resize/300x/ 300w,
            ${image}-/resize/600x/ 600w,
            ${image}-/resize/1200x/ 1200w,
            ${image}-/resize/2000x/ 2000w`  
  return image
}

const sizes = `
  (max-width: 1080px) 80vw,
  40vw
  `
const Image = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '0px' }
  const [isLoaded, setLoaded] = useState(false)
  const [isThumb, setThumb] = useState(false)

  const [ref, inView] = useInView({
      threshold: 0,
      triggerOnce: true
  });

  const { alt = '', childImageSharp, image, style } = imageInfo

   if (!!image) {
    return (
      <div ref={ref} className={`${c.wrapper}`} style={{paddingBottom: isThumb ? "0": `100%`}}>

        {inView && (
          <React.Fragment>
            <img 
                className={`${c.image} ${c.thumb}`}
                style={ {...imageStyle, ...style, visibility: isLoaded ? "hidden" : "visible" } } 
                src={`${image}-/resize/16x/`}  
                onLoad={()=>setThumb(true)}  

                alt={alt} />

            <img 
                className={`${c.image} ${c.full}`}
                style={ {...imageStyle, ...style, opacity: isLoaded ? 1 : 0 }} 
                src={`${image}-/resize/300x/`} 
                srcSet={dynImg(image)} 
                sizes={sizes}
                onLoad={()=>setLoaded(true)}  
                alt={alt} />

          </React.Fragment>
        )}
      </div>
    
    )
  } else {
    return (<div>{image}</div>)
  }
}

Image.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
    transformOptions: PropTypes.object
  }).isRequired,
}

export default Image
