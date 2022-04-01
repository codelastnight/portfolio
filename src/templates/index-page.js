import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import loadable from '@loadable/component'

import Layout from '../components/Layout'
import MainHeading from '../components/MainHeading'
import Modal from '../components/Modal'

const Contact = loadable(() => import('../components/Contact'));
const BlogRoll = loadable(() => import('../components/BlogRoll'));
const About = loadable(() => import('../components/About'));

// eslint-disable-next-line
export const IndexPageTemplate = ({
  tagline,
  socials,
  blurb,
  year,
  desc,
  listening,
  reading,
}) => {
  // const heroImage = getImage(image) || image;
  const ref = useRef()

  return (
    <div>
      <MainHeading
        tagline={tagline}
        socials={socials}
        year={year}
        openContact={() => ref.current.open()}
      />

      <BlogRoll />
      <About
        blurb={blurb}
        openContact={() => ref.current.open()}
        desc={desc}
        listening={listening}
        reading={reading}
      />
      <Modal ref={ref}>
          <Contact onClose={() => ref.current.close()}  />
        </Modal>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  openContact: PropTypes.func,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout socials={frontmatter.social_links}>
      <IndexPageTemplate
        // image={frontmatter.image}
        tagline={frontmatter.tagline}
        socials={frontmatter.social_links}
        blurb={frontmatter.aboutblurb}
        year={frontmatter.year}
        desc={frontmatter.aboutdesc}
        listening={frontmatter.listen}
        reading={frontmatter.read}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        description
        aboutblurb
        tagline
        year
        aboutdesc
        listen {
          prettyLink
          url
        }
        read {
          prettyLink
          url
        }
        social_links {
          prettyLink
          url
        }
      }
    }
  }
`
