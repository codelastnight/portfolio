import * as c from './mainheading.module.scss'
import React from 'react'
import { useEffect } from 'react'
import Button from '../Button'
import LogoIcon from '../LogoIcon'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.5,
      duration: 0.1,
    },
  },
}
const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
}
const links = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
      delayChildren: 0.5,
      duration: 0.1,
    },
  },
}
const line = {
  hidden: {
    pathLength: 0,
  },
  show: {
    pathLength: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
}
const link = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
}

const MainHeading = ({ openContact, tagline, socials, year }) => {
  const [ref, inView] = useInView()
  const controls = useAnimation()
  const linkAni = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.stop()
      linkAni.stop()
      controls.start('show')
      linkAni.start('show')
    }
    if (!inView) {
      controls.stop()
      linkAni.stop()
      controls.start('hidden')
      linkAni.start('hidden')
    }
  }, [inView, controls, linkAni])

  return (
    <React.Fragment>
      <div tabIndex={0} role="separator" aria-label="top of page" title="top of page"></div>
      <motion.section
        className={`z5 flex justify__end ${c.mainheading__wrapper}`}
        initial="hidden"
        animate={controls}
        variants={container}
      >
        <div className={`grid ${c.mainheading}`}>
          <motion.h1 variants={variants} className={`row1 col3__d span2 text`}>
            hello, my name is simon
          </motion.h1>

          <div
            className={`row2 col2 end1__r flex flexgap3 align__center  ${c.titletext} `}
          >
            <motion.h1 variants={variants} className={`${c.maxcontent}`}>
              i'm a
            </motion.h1>
            <motion.div
              variants={variants}
              className={`relative ${c.w20} flex align__center  `}
            >
              <motion.div variants={variants} className="absolute width100">
                <Button
                  className={`width100 ${c.button} ${c.margin1rem}`}
                  color="#F8ACF0"
                  height="5vmin"
                  radius="0.5rem"
                />
              </motion.div>
              <svg
                className={`width100 ${c.svg}  ${c.margin1rem}`}
                viewBox="0 0 271 105"
                stroke="currentColor"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial="hidden"
                  animate={linkAni}
                  variants={line}
                  d="M2 82.0703C37.4877 57.3352 72.0715 26.0492 111.767 9.96763C124.767 4.70099 154.129 -4.08814 166.32 8.32062C172.012 14.1139 170.302 30.0883 168.957 37.2349C164.765 59.5141 138.199 74.3119 121.326 82.9853C113.067 87.2309 104.74 90.9453 97.0981 96.5274C95.8164 97.4637 89.4838 104.391 87.2093 102.749C85.8746 101.786 86.4714 96.0861 86.55 94.5144C87.0137 85.2457 95.8244 81.5675 102.537 78.4102C125.636 67.5454 150.573 60.9331 174.231 51.6005C183.973 47.7579 211.098 35.2735 201.261 59.1036C199.476 63.4291 176.383 80.4233 188.158 80.4233C194.684 80.4233 198.219 76.3477 203.898 73.1947C213.97 67.6028 225.82 62.8604 236.367 58.3716C247.274 53.7289 257.775 50.9551 269 54.071"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            <motion.svg
              variants={variants}
              className={` ${c.svg} ${c.starcircle}`}
              viewBox="0 0 96 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.9519 37C48.9519 32.226 47.1704 27.6477 43.9994 24.2721C40.8281 20.8963 36.5273 18.9999 32.0431 18.9999C36.5273 18.9999 40.8281 17.1035 43.9994 13.7279C47.1704 10.3521 48.9519 5.77378 48.9519 1C48.9519 5.77378 50.7334 10.3521 53.9047 13.7279C57.0757 17.1035 61.3766 18.9999 65.8613 18.9999C61.3766 18.9999 57.0757 20.8963 53.9047 24.2721C50.7334 27.6477 48.9519 32.226 48.9519 37Z"
                fill="currentColor"
              />
              <ellipse
                cx="48.4824"
                cy="18.5"
                rx="46.5"
                ry="17.5"
                stroke="currentColor"
                strokeWidth="2"
              />
            </motion.svg>
          </div>
          <div
            className={`row3 col2 end1__r flex flexgap3 align__center ${c.titletext}`}
          >
            <motion.div
              variants={variants}
              className={`relative flex align__center ${c.w20} `}
            >
              <motion.div
                initial="hidden"
                animate="show"
                className={`absolute width100 `}
              >
                <Button
                  className={`width100 ${c.button} ${c.btn1}`}
                  height="6vmin"
                  radius="10rem"
                />
              </motion.div>
              <svg
                className={`width100 row3 col2 span2 ${c.svg}  `}
                viewBox="0 0 276 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial="hidden"
                  animate={linkAni}
                  variants={line}
                  d="M31.8635 25.1662C50.1558 22.0456 68.4147 19.4252 86.332 15.3289C118.321 8.01565 149.672 2.1154 183.724 1.55677C201.824 1.25983 224.199 1.27107 240.707 7.26624C245.304 8.93577 254.758 14.4059 254.881 18.4537C255.181 28.2757 229.105 32.0513 219.903 34.0776C171.276 44.7846 121.314 51.9737 70.1 53.2507C57.4188 53.5668 47.6046 53.6213 35.2357 52.7106C30.506 52.3623 21.2292 51.9122 17.4606 48.93C12.9979 45.3985 16.4495 38.2108 20.0897 35.1964C27.6956 28.8979 41.0931 24.3746 52.2106 21.81C82.7075 14.7748 116.835 10.5726 148.745 8.1921C181.521 5.74698 214.923 6.33114 246.994 11.8184C248.795 12.1266 275.105 16.1553 275 19.2253C274.967 20.167 271.813 21.6118 271.456 21.7714C262.726 25.6743 252.577 28.6438 242.936 31.2615C200.503 42.7824 153.762 48.7362 108.108 49.6629C82.2338 50.1882 54.0633 49.2713 29.0058 44.3007C19.2123 42.3579 10.0761 38.6452 1 35.5821"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
            <motion.h1 variants={variants} className={``}>
              designer
              <span>®</span>
            </motion.h1>
          </div>
          <div className="row4 col2 end1__r flex flexgap align__center">
            <motion.svg
              variants={variants}
              className={`${c.svg} ${c.flower}`}
              viewBox="0 0 45 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.8516 13.2933C14.8317 11.8635 14.2821 10.1406 14.2821 8.3721C14.2821 3.7511 17.9649 0 22.501 0C27.0371 0 30.7199 3.7511 30.7199 8.3721C30.7199 10.1406 30.1702 11.8635 29.1497 13.2933L27.4855 15.6276L29.1497 13.2933C30.1702 11.8635 31.6084 10.7984 33.2592 10.2522C37.5736 8.82435 42.2141 11.2331 43.6157 15.6276C45.0174 20.0222 42.6529 24.7495 38.3385 26.1774C36.6883 26.7243 34.91 26.7243 33.2592 26.1774L30.5661 25.286L33.2592 26.1774C34.91 26.7243 36.3488 27.7887 37.3686 29.2191C40.0348 32.9578 39.2199 38.1982 35.5506 40.9142C31.8806 43.6303 26.7366 42.8002 24.0704 39.0615C23.0506 37.6317 22.501 35.9089 22.501 34.1403V31.2552V34.1403C22.501 35.9089 21.9513 37.6317 20.9315 39.0615C18.2653 42.8002 13.1213 43.6303 9.45136 40.9142C5.78138 38.1982 4.96718 32.9578 7.63334 29.2191C8.65318 27.7887 10.092 26.7243 11.7421 26.1774L14.4359 25.286L11.7421 26.1774C10.092 26.7243 8.31366 26.7243 6.66284 26.1774C2.34905 24.7495 -0.0153972 20.0222 1.38623 15.6276C2.78786 11.2331 7.42835 8.82435 11.7421 10.2522C13.393 10.7984 14.8317 11.8635 15.8516 13.2933L17.5165 15.6276L15.8516 13.2933Z"
                fill="currentColor"
              />
            </motion.svg>
            <div className=" flex">
              <div className="relative z1">
                <motion.div variants={variants} className={''}>
                  <Button
                    className={`absolute z-1 ${c.button} ${c.btn2}`}
                    color="#88DC8B"
                    height="18vmin"
                    width="18vmin"
                    radius="3vmin"
                  />
                </motion.div>
                <motion.h1 variants={variants} className={`z5 ${c.titletext}`}>
                  (of sorts)
                </motion.h1>
              </div>
              <motion.h2
                variants={variants}
                className={`text z5 show__d ${c.tagline}`}
              >
                {tagline}
              </motion.h2>
            </div>
          </div>

          <motion.h2
            variants={variants}
            className={`row5 col2 span2 text z5 show__m ${c.tagline}`}
          >
            {tagline}
          </motion.h2>

          {/* <h4 className={`row5 col2 span2 z5 text ${c.paddingtop}`}>industrial design + web dev + UI/UX + graphic design</h4> */}
        </div>
        <div className={`grid ${c.footer}`}>
          <motion.div
            className={`row6 col2__r end1__r z5  ${c.caption} `}
            initial="hidden"
            animate={linkAni}
            variants={links}
          >
            <h3 className="text">
              <motion.span variants={link}>
                <Link to="#work" type="work" role="link" element="work">
                  scroll down
                </Link>{' '}
                to see some of my selected work,{' '}
              </motion.span>
              <motion.span variants={link}>
                or send me a message via{' '}
                <span
                  className="pseudolink"
                  onClick={() => openContact()}
                  role="link"
                  onKeyPress={() => openContact()}
                  role="button"
                  tabIndex="0"
                >
                  online mail.{' '}
                </span>
              </motion.span>
              <motion.span variants={link}>
                If you’re curious, check out what I'm{' '}
                <Link to="#about" type="about" role="link" element="about">
                  listening to
                </Link>{' '}
                right now.{' '}
              </motion.span>
            </h3>
            <Link href="#work" type="work" role="link" element="work" aria-label="scroll to work" title="scroll to work">
              <svg
                width="23"
                height="28"
                viewBox="0 0 23 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial="hidden"
                  animate={linkAni}
                  variants={line}
                  d="M11.211 1.34155C10.9258 6.19 11.3931 10.9613 11.4237 15.8067C11.4398 18.3644 11.3535 20.9187 11.6364 23.4648"
                />
                <motion.path
                  initial="hidden"
                  animate={linkAni}
                  variants={line}
                  d="M1 15.594C2.44192 17.9503 4.25581 20.0564 5.82173 22.3302C6.62219 23.4926 7.64517 24.4532 8.63441 25.4502C9.00712 25.8258 9.80773 27.0473 10.5016 26.892C11.3709 26.6974 12.2628 25.7503 12.9361 25.2375C14.3168 24.186 15.722 23.1606 17.0724 22.0702C18.9255 20.574 19.8713 18.5755 21.4215 16.8703"
                />
              </svg>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ when: 'beforeChildren', duration: 0.2 }}
            className={`row7 show__d`}
          >
            <LogoIcon />
          </motion.div>

          <motion.div
            className={`row7 col2 ${c.links}`}
            initial="hidden"
            animate={linkAni}
            variants={links}
          >
            {socials &&
              socials.map((element, i) => (
                <motion.p variants={link} key={i}>
                  <a href={element.url}>{element.prettyLink}</a>
                </motion.p>
              ))}
          </motion.div>
          <motion.div
            className={`row7 col3__d  ${c.links}`}
            initial="hidden"
            animate={linkAni}
            variants={links}
          >
            <motion.p variants={link}>©</motion.p>
            <motion.p variants={link}>copyright</motion.p>
            <motion.p variants={link}>{year}</motion.p>
          </motion.div>
        </div>
      </motion.section>
      <section ref={ref} className={c.mainheading__dummy}></section>
    </React.Fragment>
  )
}
MainHeading.propTypes = {
  openContact: PropTypes.func,
  tagline: PropTypes.string,
  socials: PropTypes.array,
  year: PropTypes.string,
}

export default MainHeading
