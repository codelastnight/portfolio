import CMS from 'netlify-cms-app'
//import uploadcare from 'netlify-cms-media-library-uploadcare'
//import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import PortfolioPreview from './preview-templates/IndexPagePreview'

import './cms-utils'
//import '../style/index.scss'
//CMS.registerMediaLibrary(uploadcare)
//CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('portfolio', PortfolioPreview)

//CMS.registerPreviewTemplate('products', ProductPagePreview)
