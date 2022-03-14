import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ExpandImage from '../components/ExpandImage'

import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import Button from '../components/Button'
const Heading = ({ children, first, second, label, image }) => {
  return (
    <section className={`grid ${!image && 'spacer__top'}`}>
      <div className="col1 col3__d end1__r z1">
      {image && 
        <PreviewCompatibleImage imageInfo={{
          image: image,
          alt: `featured image for ${label}`,
          style: {
            maxHeight: "60vh"          }
        }}  />
        
        }
        </div>
      <label className="col1 col2__d " style={image && {marginTop: "-6em"}}><mark>{label}</mark></label>

      <div className="col1 col3__d end1__r limit z5" style={image && {marginTop: "-6em"}}>
        
        {children}
        </div>
      <div
        className="col1 split text col3__d limit end1__r "
        style={{ marginTop: 'var(--f1)' }}
      >
        <div>{first}</div>
        <div>{second}</div>
      </div>
    </section>
  )
}

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  description2,
  date,
  featuredimage,
  bodycontent,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <React.Fragment>
      {helmet || ''}
      <div
        className="flex flex__column justify__end"
        style={{ minHeight: '60vh' }}
      >


        <Heading
          label="title"
          image={featuredimage}
          second={
            tags && tags.length ? (
              <div className="flex flexgap1">
                {tags.map((tag) => (
                  <p key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </p>
                ))}
              </div>
            ) : null
          }
        >
          <h1 className="title indent "><mark>{title}</mark></h1>
        </Heading>
      </div>

      <Heading
        label="about"
        first={<p>{date}</p>}
        second={<p>{description2}</p>}
      >
        <p className="big long indent ">{description}</p>
      </Heading>

      <section className="grid spacer__top v-padding6">
        <article
          className="col1 col2__d end1__r text long "
          style={{ maxWidth: '70rem' }}
        >
          {
            bodycontent && bodycontent.length ? (
              <div className="w100">
                {bodycontent.map((bodycontent, i) => (
                   <div key={i}>
                     <ExpandImage imageInfo={{
                          image: bodycontent.image,
                          alt: `featured image thumbnail for post ${bodycontent.image}`,
                          style: {
                            
                          }
                        }}
                        />
                     </div>
                ))}
              </div>
            ) : null
          }
        </article>
      </section>
      <section className="grid v-padding6" style={{ maxWidth: '70rem' }}>
        <div
          className={`col1 col3__d end1__r fg limit__s `}
          onClick={() => window.history.back()}
          onKeyPress={() => window.history.back()}
          role="button"
          tabIndex="0"
        >
          <Button color="#88DC8B" height="5.5em " radius={'2em'}>
            <p className='bold'>Return to Works ↩</p>
          </Button>
        </div>
      </section>
    </React.Fragment>
  )
}

BlogPostTemplate.propTypes = {
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description2: PropTypes.string,
  date: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        bodycontent= {post.frontmatter.bodycontent}
        description={post.frontmatter.description}
        description2={post.frontmatter.description2}
        date={post.frontmatter.prettydate}
        featuredimage={post.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query PortfolioById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        tags
        description2
        prettydate
        bodycontent {
          type
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, breakpoints: [800,1080, 1200, 1400], formats: WEBP, layout: FULL_WIDTH)
            }
          }
        }
        featuredimage {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              breakpoints: [800, 1080, 1200,1400]
              layout: FULL_WIDTH
              formats: WEBP
            )
          }
        }
      }
    }
  }
`
