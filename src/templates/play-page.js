import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import * as c from './play-page.module.scss'

// eslint-disable-next-line
export const PlayPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className={`grid ${c.playsection}`}>
      <div className="col2 end1__r ">
        <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
          {title}
        </h2>
        <PageContent className="content" content={content} />
      </div>
    </section>
  )
}

PlayPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PlayPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PlayPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

PlayPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PlayPage

export const playPageQuery = graphql`
{
  markdownRemark(frontmatter: { templateKey: { eq: "play-page" } }) {
    frontmatter {
      title
     
    }
  }
}
`
