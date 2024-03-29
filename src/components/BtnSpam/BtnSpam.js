import React from 'react'
import { useState, useEffect } from 'react'
import Button from '../Button'
import distribute from './poordistribute'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// const container = {
//     hidden: { opacity: 0},
//     show: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.1,
//             delay: 0.5,
//             delayChildren: 0.5,
//             duration: 0
//           }
//         }
//   }
const variants = {
  hidden: (i) => ({
    opacity: 0,
  }),
  show: (i) => ({
    opacity: 1,
    transition: {
      duration: 0,
      delay: i * 0.2 + 0.4,
    },
  }),
}

const BtnSpam = ({ children, count, color, className, onClick }) => {
  const [arr, setArr] = useState()
  const [ref, inView] = useInView()
  const controls = useAnimation({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      controls.stop()
      setArr(distribute(count, 0, 80))
      controls.start('show')
    }
    if (!inView) {
      controls.stop()
      controls.start('hidden')
    }
  }, [inView, controls, count])

  useEffect(() => {
    setArr(distribute(count, 0, 80))
  }, [count])

  return (
    <React.Fragment>
      {arr && (
        <div ref={ref} className={className}>
          {arr.map((e, i) => (
            <motion.div
              initial="hidden"
              custom={i}
              animate={controls}
              variants={variants}
              key={i}
              tabindex={i === 0 ? "0" : "-1"}
              onClick={() => onClick()}
              role="button"
              tabIndex={0}
              onKeyPress={() => onClick()}
              className={`absolute `}
              style={{ top: `${e[0]}%`, left: `${e[1]}%` }}
            >
              <Button color={'black'} bgcolor={color} height="3.5em" width="14em">
                {children}
              </Button>
            </motion.div>
          ))}
        </div>
      )}
    </React.Fragment>
  )
}

BtnSpam.defaultProps = {
  count: 5,
  color: '#FF9023',
}

export default BtnSpam
