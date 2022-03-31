import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useInView } from 'react-intersection-observer'
const sizes = [
  '300',
  '500',
  '800',
  '2000'
]

const dynImg = (image) => {
  image = `${image}-/resize/300x/ ,
            ${image}-/resize/500x/ 1.25x,
            ${image}-/resize/800x/ 1.75x,
            ${image}-/resize/2000x/ 2x`  
  return image
}
const dynSizes = () => {
  const sizes = `
  (max-width: 480px) 300px,
  (max-width: 680px) 500px,
  (max-width: 980px) 800px,
  2000px
  `
  return sizes
}

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '0px' }
  const [isLoaded, setLoaded] = useState(false)
  const [ref, inView] = useInView();

  const { alt = '', childImageSharp, image, style } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        style={{...imageStyle, ...style}}
        alt={alt}
      />
    )
  } else if (!!childImageSharp) {
    return (
      <GatsbyImage
        image={childImageSharp.gatsbyImageData}
        style={{...imageStyle, ...style}}
        alt={alt}

      />
    )
    // for Netlify CMS
  } else if (!!image) {
    return (
      <div ref={ref} style={{paddingBottom: isLoaded ? "0": `100%`}}>

        {inView && (
          <React.Fragment>
            <img style={ {...imageStyle, ...style, filter: `blur(3px)`,  visibility: isLoaded ? "hidden" : "visible" } } src={`${image}-/resize/16x/`}  alt={alt} />

            <img style={ {...imageStyle, ...style, opacity: isLoaded ? 1 : 0 }} srcSet={dynImg(image)} src={`${image}-/resize/2000x/`} onLoad={()=>setLoaded(true)}  alt={alt} />

          </React.Fragment>
        )}
      </div>
    
    )
  } else {
    return (<div>{image}</div>)
  }
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
    transformOptions: PropTypes.object
  }).isRequired,
}

export default PreviewCompatibleImage
