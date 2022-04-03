import React from 'react'
import * as c from './about.module.scss'

const About = ({ openContact, blurb, desc, interests,}) => {
  return (
    <section id="about" className={` ${c.about}`}>
      <div className="grid">
        <div className={`z5 col2 end1__r ${c.spacer}`}>
          <h3 className={`long ${c.paragraph} ${c.bg}`}>
            {blurb}{' '}
            <span
              className="pseudolink"
              onKeyPress={() => openContact()}
              role="button"
              tabIndex="0"
              onClick={() => openContact()}
            >
              lets connect
            </span>{' '}
            {'<3'}
          </h3>
        </div>
        <div className={`z5 col2 end5__r split text`}>
          <div>
            <p className={c.bg}>{desc}</p>
          </div>

          <div>
            {interests && interests.map(interest => (
              <div className={c.bg}>
              <h4>{interest.title}</h4>
              <p>
                <a href={interest.url}>{interest.prettyLink}</a>
              </p>
            </div>
            ))}
            
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
