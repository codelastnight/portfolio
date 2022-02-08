import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";


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
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <React.Fragment>
      {helmet || ""}
      <div className="flex flex__column justify__end" style={{minHeight: '60vh'}}>
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

        first={<p>2021</p>}

        second={<p>test client</p>}
        >
        <p className="big long indent ">
                {description}
        </p>
      </Heading>

      <section className="grid spacer__top">
        <article className="col1 col3__d end1__r text long limit">
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
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
