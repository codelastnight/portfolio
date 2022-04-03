import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
//import cloudinary from 'netlify-cms-media-library-cloudinary'

import PlayPagePreview from './preview-templates/PlayPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import PortfolioPreview from './preview-templates/PortfolioPreview'
import { Widget as ReorderWidget } from '@ncwidgets/reorder'

import './cms-utils'
CMS.registerMediaLibrary(uploadcare)
//CMS.registerMediaLibrary(cloudinary)

CMS.registerWidget(ReorderWidget)
CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', PlayPagePreview)
CMS.registerPreviewTemplate('portfolio', PortfolioPreview)

//CMS.registerPreviewTemplate('products', ProductPagePreview)
