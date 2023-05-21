import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import * as c from './play-page.module.scss'
import ExpandImage from '../components/ExpandImage/ExpandImage';

// eslint-disable-next-line
export const PlayPageTemplate = ({ frontmatter }) => {
  const { bodycontent } = frontmatter
  return (
    <section className="grid spacer__top v-padding6">
      <article className="col1 cold2__d end1__r center spacer__m ">
        <h1 className={c.title}>after<span>
          <svg width="276" height="54" viewBox="0 0 276 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.8635 24.7067C50.1558 21.5862 68.4147 18.9657 86.332 14.8695C118.321 7.55618 149.672 1.65593 183.724 1.09729C201.824 0.800354 224.199 0.811594 240.707 6.80677C245.304 8.47629 254.758 13.9465 254.881 17.9943C255.181 27.8162 229.105 31.5918 219.903 33.6182C171.276 44.3251 121.314 51.5143 70.1 52.7912C57.4188 53.1074 47.6046 53.1619 35.2357 52.2511C30.506 51.9028 21.2292 51.4527 17.4606 48.4705C12.9979 44.939 16.4495 37.7513 20.0897 34.7369C27.6956 28.4384 41.0931 23.9151 52.2106 21.3505C82.7075 14.3153 116.835 10.1131 148.745 7.73263C181.521 5.2875 214.923 5.87167 246.994 11.3589C248.795 11.6671 275.105 15.6958 275 18.7658C274.967 19.7075 271.813 21.1523 271.456 21.3119C262.726 25.2148 252.577 28.1843 242.936 30.802C200.503 42.323 153.762 48.2767 108.108 49.2035C82.2338 49.7287 54.0633 48.8118 29.0058 43.8412C19.2123 41.8985 10.0761 38.1857 1 35.1227" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>

        </span>
          hours </h1>
        <h1 className={c.title}>exploration</h1>
        <p>The first rule of fight club is to have fun and be yourself {':)'}</p>
      </article>
      <article
        className={`col1 col2__d end1__r end1__rd text long ${c.content}`}

      >
        {
          bodycontent && bodycontent.length ? (
            <div className={`w100 ${c.imagecontent}`} role="list" >
              {bodycontent.map((content, i) => (
                <div key={i} role="listitem">
                  {content.type === "bodytext" ?
                    <div className=" long spacer__m" style={{ maxWidth: '30em' }}>
                      {content.heading ? <h3 className="big">{content.heading}</h3> : null}
                      <p className='text'>{content.text}</p>
                    </div> : <>
                      <ExpandImage imageInfo={{
                        image: content.image,
                        alt: content.alt,
                      }}
                      />
                      <p>{content.alt}</p>
                    </>}

                </div>
              ))}
            </div>
          ) : null
        }
      </article>
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
    <Layout fgColor={'#DE1120'} bgColor={'#F0F0F0'}>
      <PlayPageTemplate
        contentComponent={HTMLContent}
        frontmatter={post.frontmatter}
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
      bodycontent {
        type
        image
        alt
        text
      }
     
    }
  }
}
`
