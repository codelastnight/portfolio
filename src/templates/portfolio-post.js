import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
const Heading = ({
    children,
    first,
    second,
    label
  }) => {
  return (
    <section className="grid spacer__top">
    <label className="col1 col2__d ">{label}</label>
    <div className="col1 col3__d end1__r limit">
      {children}
    </div>
    <div className="col1 split text col3__d limit end1__r " style={{marginTop: "var(--f1)"}}>
      <div>
        {first}

      </div>
      <div>
        {second}
      </div>
      
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
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <React.Fragment>
      {helmet || ""}
      <div className="flex flex__column justify__end" style={{minHeight: '60vh'}}>
      {/* <section className="grid">
        <div className="col1 col3__d end1__r limirt">
        <PreviewCompatibleImage imageInfo={{
                        image: featuredimage,
                        alt: `featured image for ${title}`
                        
                      }}  />
        </div>
          

      </section> */}

      <Heading 
        label="title"
        second={tags && tags.length ? (
          <div className="flex flexgap1" >
              {tags.map((tag) => (
                <p key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </p>
              ))}
            </div>
          ) : null}
        >
        <h1 className="title indent ">
                {title}
        </h1>
      </Heading>
      </div>
    
      <Heading 
        label="about"

        first={<p>{date}</p>}

        second={<p>{description2}</p>}
        >
        <p className="big long indent ">
                {description}
        </p>
      </Heading>

      <section className="grid spacer__top">
        <article className="col1 col2__d end1__r text long " style={{maxWidth: '70rem'}}>
          <PostContent content={content} />

         
        </article>
       
      </section>

   
    </React.Fragment>
  
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description2: PropTypes.string,
  date: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
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
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

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
        featuredimage {
          childImageSharp {
            gatsbyImageData(
              width: 1000
              quality: 90
              layout: FULL_WIDTH
              formats: WEBP
            )

          }
        }
      }
    }
  }
`;
