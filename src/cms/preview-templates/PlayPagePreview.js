import React from 'react'
import PropTypes from 'prop-types'
import { PlayPageTemplate } from '../../templates/play-page'

const PlayPagePreview = ({ entry, widgetFor }) => (
  <PlayPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

PlayPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PlayPagePreview
