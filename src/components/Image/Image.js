import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import * as c from './image.module.scss'

const dynImg = (image) => {
  image = `${image}-/resize/600x/-/format/webp/ 300w,
            ${image}-/resize/800x/-/format/webp/ 600w,
            ${image}-/resize/1200x/-/format/webp/ 800w,
            ${image}-/resize/1600x/-/format/webp/ 1000w,
            ${image}-/resize/1800x/-/format/webp/ 1200w,
            ${image}-/resize/2000x/-/format/webp/ 1400w
`
  return image
}

const defsizes = `
  (max-width: 1080px) 80vw,
  40vw
  `

const Image = ({ imageInfo, onThumbLoad }) => {
  //const [isThumb, setThumb] = useState(false)
  const [isLoaded, setLoaded] = useState(false)

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true
  });

  const onImgLoad = ({ target: img }) => {
    //setThumb(true)
    if (!!onThumbLoad) onThumbLoad(img);

  }

  const { alt = '', sizes, image, style } = imageInfo

  if (!!image) {
    return (
      <div ref={ref} className={`${c.wrapper}`} >
        <img
          className={`${c.image} ${c.thumb}`}
          style={{ ...style, visibility: isLoaded ? "hidden" : "visible" }}
          src={`${image}-/resize/64x/-/format/webp/`}
          onLoad={onImgLoad}

          alt={alt} />
        {inView && (


          <img
            className={`${c.image} ${c.full}`}
            style={{ ...style, opacity: isLoaded ? 1 : 0 }}
            src={`${image}-/resize/300x/-/format/webp/`}
            srcSet={dynImg(image)}
            sizes={!!sizes ? sizes : defsizes}
            onLoad={() => setLoaded(true)}
            alt={alt} />

        )}
      </div>

    )
  } else {
    return (null)
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
  onThumbLoad: PropTypes.func
}

export default Image
