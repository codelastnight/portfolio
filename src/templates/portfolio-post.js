import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import ExpandImage from '../components/ExpandImage'
import Image from '../components/Image'
import ProjectFooterNav from '../components/ProjectFooterNav/ProjectFooterNav'

const Heading = ({ children }) => {
  return (
    <section className={`grid spacer__top`}>
      <div className="col1 col2__d end1__r end1__rd z1">
        <div className="col1 end5 limit z5" >
          {children}
        </div>
      </div>
    </section>
  )
}

// eslint-disable-next-line
export const BlogPostTemplate = ({
  frontmatter,
  helmet,
}) => {
  const { description, description2, prettydate, featuredimage, bodycontent, tags, title, role, members } = frontmatter;
  return (
    <React.Fragment>
      {helmet || ''}
      <div
        className="flex flex__column justify__end"
        style={{ minHeight: '60vh' }}
      >

        <section className={`grid ${!featuredimage && 'spacer__top'}`}>
          <div className="col1 col2__d end1__r end1__rd z1">

            <div className="col1 end5 limit z5" style={{ marginTop: '20vh', marginBottom: 'var(--f3)' }}>
              <h1 className="title ">{title}</h1>
            </div>
            <div
              className="col1 split text col3__d limit end1__r "
              style={{ marginBottom: 'var(--f3)' }}
            >
              <p>{description2}</p>
              <p>{role}</p>
              <div>{tags && tags.length ? (
                <div className="flex flexgap1">
                  {tags.map((tag) => (
                    <p key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </p>
                  ))}
                </div>
              ) : null}</div>
              <p>{prettydate}</p>
              {members && <p>{members}</p>}
            </div>

            {featuredimage &&
              <Image imageInfo={{
                image: featuredimage,
                alt: `featured image for ${title}`,
                style: {
                  width: '100%',
                }
              }} />
            }



          </div>


        </section>

      </div>

      <Heading
      >
        <p className="big long indent ">{description}</p>
      </Heading>

      <section className="grid spacer__top v-padding6">
        <article
          className="col1 col2__d end1__r end1__rd text long "
          style={{}}
        >
          {
            bodycontent && bodycontent.length ? (
              <div className="w100" role="list" >
                {bodycontent.map((content, i) => (
                  <div key={i} role="listitem">
                    {content.type === "bodytext" ?
                      <div className=" long spacer__m" style={{ maxWidth: '30em' }}>
                        {content.heading ? <h3 className="big">{content.heading}</h3> : null}
                        <p className='text'>{content.text}</p>
                      </div> : <ExpandImage imageInfo={{
                        image: content.image,
                        alt: content.alt,
                        style: {

                        }
                      }}
                      />}

                  </div>
                ))}
              </div>
            ) : null
          }
        </article>
      </section>
      <ProjectFooterNav />
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
  alt: PropTypes.string
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout fgColor={post.frontmatter.fgcolor} bgColor={post.frontmatter.bgcolor}>
      <BlogPostTemplate
        frontmatter={post.frontmatter}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }

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
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        title
        description
        fgcolor
        bgcolor
        tags
        description2
        role
        members
        prettydate
        bodycontent {
          type
          image 
          alt
          text
          heading
        }
        featuredimage 
      }
    }
  }

`
