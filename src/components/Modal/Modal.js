import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useCallback,
  Fragment
} from 'react'
import * as c from './modal.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import Portal from '../Portal'
import { Dialog, Transition } from '@headlessui/react'
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
    setOpen: (state) => setOpen(state),
    open: () => setOpen(true),
    close: () => setOpen(false),
    state: () => { return isOpen }
  }))

  // const escFunction = useCallback((event) => {
  //   if (event.key === 'Escape') {
  //     setOpen(false)
  //   }
  // }, [])

  // useEffect(() => {
  //   document.addEventListener('keydown', escFunction, false)

  //   return function cleanup() {
  //     document.removeEventListener('keydown', escFunction, false)
  //   }
  // }, [])


  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-y-60 opacity-0"
      enterTo="transform scale-y-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog open={isOpen} onClose={() => setOpen(false)}>
        <div className={c.background} aria-hidden="true" />

        <div className={c.wrapper}>
          <Dialog.Panel className="">
            <Dialog.Title>Deactivate account</Dialog.Title>
            <Dialog.Description>
              This will permanently deactivate your account
            </Dialog.Description>
            {children}
          </Dialog.Panel>
        </div>

      </Dialog>
    </Transition>
  )
}

export default forwardRef(Modal)
