import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import MainHeading from '../components/MainHeading'

import BlogRoll from '../components/BlogRoll'
import About from '../components/About'
// eslint-disable-next-line
export const IndexPageTemplate = ({
  tagline,
  socials,
  blurb,
  year,
  openContact,
  desc,
  listening,
  reading,
}) => {
  // const heroImage = getImage(image) || image;

  return (
    <div>
      <MainHeading
        tagline={tagline}
        socials={socials}
        year={year}
        openContact={() => openContact()}
      />

      <BlogRoll />
      <About
        blurb={blurb}
        openContact={() => openContact()}
        desc={desc}
        listening={listening}
        reading={reading}
      />
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  openContact: PropTypes.func,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const layoutRef = useRef()
  return (
    <Layout ref={layoutRef} socials={frontmatter.social_links}>
      <IndexPageTemplate
        // image={frontmatter.image}
        tagline={frontmatter.tagline}
        socials={frontmatter.social_links}
        blurb={frontmatter.aboutblurb}
        year={frontmatter.year}
        openContact={() => layoutRef.current.openContact()}
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
