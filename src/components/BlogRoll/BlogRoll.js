//ts-check
import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Image from '../Image'
import * as c from './blogroll.module.scss'

class BlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section id="work" className={`grid grid-row ${c.blogroll}`}>
        <div className={c.posts} role="list" >
          {posts &&
            posts.map(({ node: post }) => (
              post.frontmatter.visible &&
              <article key={post.id} role="listitem" className={`text ${c.article}`}>
                <Link to={post.fields.slug}>
                  {post.frontmatter.thumbnail ? (
                    <div className={`featured-thumbnail ${c.img}`}>
                      <Image
                        imageInfo={{
                          image: post.frontmatter.thumbnail,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          // width:
                          //   post.frontmatter.featuredimage.childImageSharp
                          //     .gatsbyImageData.width,
                          // height:
                          //   post.frontmatter.featuredimage.childImageSharp
                          //     .gatsbyImageData.height,
                        }}
                      />
                    </div>
                  ) : (
                    <div className={c.img__placeholder}></div>
                  )}
                  <p className={c.text}>
                    <span className={c.hover}>{post.frontmatter.title}</span>
                  </p>
                </Link>
              </article>


            ))}
        </div>
      </section>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "portfolio-post" } } }
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  visible
                  date
                  thumbnail
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  )
}

