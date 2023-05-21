import { Link, graphql, StaticQuery } from 'gatsby'
import React from 'react'
import * as c from './ProjectFooterNav.module.scss'
const ProjectFooterTemplate = ({ data, }) => {
  const [location, setLocation] = React.useState('')
  React.useEffect(() => {
    const isBrowser = () => typeof window !== "undefined"
    isBrowser() && setLocation(window.location.href);
  }, [])
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className={c.container}>
      <p className='medium ' style={{ maxWidth: '30em' }}>
        {posts && posts.map(({ node: post }, index) =>
          post.frontmatter.visible && < >
            {!location.includes(post.fields.slug) ?
              <Link href={post.fields.slug} key={post.id}>
                {post.frontmatter.title}
              </Link> :
              <mark className='' key={post.id}>
                {post.frontmatter.title}
              </mark>
            }
            {index === (posts.length - 1) ? '' : ' / '}
          </>
        )}
      </p>
    </div>
  )
}
function ProjectFooterNav({ link }) {
  return (
    <StaticQuery
      query={graphql`
          query ProjectFooterQuery {
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
                    visible
                  }
                }
              }
            }
          }
        `}
      render={(data, count) => <ProjectFooterTemplate data={data} count={count} link={link} />}
    />
  )
}


export default ProjectFooterNav;