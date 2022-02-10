import React from 'react';
import * as c from './modal.module.scss'
import {motion, AnimatePresence } from 'framer-motion'


const variant = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.1,
            delay: 0.2,
        }
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.1,
            
        }
    }
}

 function Modal({isOpen, children, onClose}) {
  
    return (
        <AnimatePresence>
            {isOpen &&
                <motion.div 
                initial={"hidden"}
                animate={"show"}
                exit={"hidden"}
                variants={variant}
                className={`z100 ${c.wrapper}`}>
                <div className={`${c.background}`} 
                role='presentation'
                
                onClick={onClose}>
    
                </div>
                    {children}
            </motion.div>              
            
            }
        </AnimatePresence>
                   
    )
    
   
}

export default Modal