import * as React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'

const ExpandImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '0px' }

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
  } else if (image) {
    return <img style={{...imageStyle, ...style}} src={image} alt={alt} />
  } else {
    return null
  }
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
