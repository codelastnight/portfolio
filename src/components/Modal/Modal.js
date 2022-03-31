import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react'
import * as c from './modal.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import Portal from '../Portal'
const variant = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.1,
      delay: 0.2,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
}

const Modal = ({ children }, ref) => {
  const [isOpen, setOpen] = useState(false)
  
  useImperativeHandle(ref, () => ({
     
      open: ()=>setOpen(true),
      close: ()=>setOpen(false),

  }))

 
  return (
    <Portal>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={'hidden'}
              animate={'show'}
              exit={'hidden'}
              variants={variant}
              className={`z100 ${c.wrapper}`}
            >
              <div
                className={`${c.background}`}
                role="presentation"
                onClick={() => setOpen(false)}
              ></div>
              {children}
            </motion.div>
          ) : null}
      </AnimatePresence>
    </Portal>
  )
}

export default forwardRef(Modal)