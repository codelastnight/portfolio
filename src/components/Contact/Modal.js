import React from 'react';
import * as c from './modal.module.scss'
import {motion} from 'framer-motion'

 function Modal({isOpen, children, onClose}) {
    if (isOpen) {
        return (
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.3}}
                    className={`z100 ${c.wrapper}`}>
                    <div className={`${c.background}`} onClick={onClose}>
        
                    </div>
                    <div className='relative'>
                        {children}
                    </div>
                </motion.div>         
        )
    } 
    return (
        <div>

        </div>
    )
   
}

export default Modal