import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/portfolio-post'

const PortfolioPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  const tags = entry.getIn(['data', 'tags'])
  if (data) {
  return (
    <BlogPostTemplate
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
      description2={entry.getIn(['data', 'description2'])}
      date={entry.getIn(['data', 'date'])}
      featuredimage={entry.getIn(['data', 'featuredimage'])}
    />
  )
  }
}

PortfolioPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PortfolioPreview
