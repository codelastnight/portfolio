import React, { useState, useEffect, useCallback, useRef } from 'react'
import * as c from './contact.module.scss'
import Modal from './Modal'
import { ReactComponent as Battery } from './battery.svg'
import { ReactComponent as Lte } from './LTE.svg'
import { ReactComponent as Mail } from './mail.svg'
import { ReactComponent as Away } from './away.svg'

import Button from '../Button'
import { motion } from 'framer-motion'

const variant = {
  hidden: {
    scaleY: 0.5,
    transition: {
      duration: 0.1,
    },
  },
  show: {
    scaleY: 1,
    transition: {
      duration: 0.1,
    },
  },
}

function Contact({ onClose, isOpen, socials }) {
  const [date, setDate] = useState(new Date())

  const escFunction = useCallback((event) => {
    if (event.key === 'Escape') {
      onClose()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false)

    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
      document.removeEventListener('keydown', escFunction, false)
    }
  }, [])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {isOpen && (
        <motion.div
          initial={'hidden'}
          animate={'show'}
          exit={'hidden'}
          variants={variant}
          className={c.wrapper}
          role="dialog"
          aria-label="contact me!"
          aria-describedby="contact1Desc"
          aria-modal="true"
        >
          <div className={c.phone}>
            <div className={`flex justify__between align__center ${c.topbar}`}>
              <Lte />
              <div className="flex flexgap1 align__center">
                <Mail />
                <p>New Mail</p>
              </div>
              <div className="flex flexgap1 align__center">
                <p>
                  {date.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                  })}
                </p>

                <Battery />
              </div>
            </div>
            <div className={`${c.content}`}>
              <div className={`z1 ${c.hero}`}>
                <div className={` ${c.herobg}`}>
                  <div className={c.herobg__inner}></div>
                </div>

                <div className={`${c.hero__content} `}>
                  <p
                    id="contact1Desc"
                    className={`${c.paragraph} ${c.big} long`}
                  >
                    i'm away from my computer right now... shoot me a message or
                    connect with me on <SocialLink socials={socials} i={2} />. I
                    also have a <SocialLink socials={socials} i={1} /> and{' '}
                    <SocialLink socials={socials} i={0} />.
                  </p>
                  <p style={{ color: '#FF5833' }}>
                    <span>
                      <Away />
                    </span>{' '}
                    simon is away
                  </p>
                </div>
              </div>
              <form
                id="theform"
                method="post"
                netlify-honeypot="bot-field"
                data-netlify="true"
                name="contact"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div className="flex flexgap1 wrap">
                  <label>
                    <p>Whats Your Name</p>
                    <input
                      type="text"
                      name="name"
                      placeholder="let me know"
                      required
                      autoFocus
                    />
                  </label>
                  <label>
                    <p>Email</p>
                    <input
                      type="email"
                      name="email"
                      placeholder="email@email.com"
                      required
                    />
                  </label>
                </div>

                <label>
                  <p>Message</p>
                  <textarea
                    name="message"
                    type="textarea"
                    id="message"
                    form="theform"
                    placeholder="send a message..."
                    required
                  ></textarea>
                </label>
                <div className="flex justify__between">
                  <div
                    tabIndex="0"
                    onClick={() => onClose()}
                    role="button"
                    aria-label="close"
                    onKeyPress={() => onClose()}
                  >
                    <Button
                      color="#DCDCDC"
                      height="3em"
                      width="7em"
                      radius="0.7em"
                    >
                      <h3 className={` bold `}>Cancel</h3>
                    </Button>
                  </div>
                  <div className="flex align__center flexgap1">
                    <p>ℹ️ sending as online mail</p>
                    <button type="submit" className={`${c.button} ${c.white}`}>
                      <Button
                        color="#1c1c1c"
                        height="3em"
                        width="7em"
                        radius="0.7em"
                      >
                        <h3 className={`bold   `}>Send</h3>
                      </Button>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      )}
    </Modal>
  )
}

const SocialLink = ({ socials, i, ref }) => {
  return (
    socials && (
      <a href={socials[i]} ref={ref}>
        {socials[i].prettyLink}
      </a>
    )
  )
}

export default Contact
