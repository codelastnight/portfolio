import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import * as c from './blogroll.module.scss'
class BlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section id="work" className={`grid grid-row ${c.blogroll}`}>
        <div className={c.posts}>
        {posts &&
          posts.map(({ node: post }) => (
            
            <article
              key={post.id}
              className={`text ${c.article}`}
            >

                <Link
                  to={post.fields.slug}
                >
                {post.frontmatter.featuredimage ? (
                  <div className={`featured-thumbnail ${c.img}`}>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
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
                ) : <div className={c.img__placeholder}></div>}
                <p className="post-meta ">
                  <Link
                    className=""
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                 
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
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 200
                        quality: 90
                        layout: FULL_WIDTH
                        
                      )

                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
