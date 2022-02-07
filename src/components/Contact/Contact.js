import React , { useEffect, useState }from 'react';
import * as c from './contact.module.scss'
import Modal from './Modal'



function Contact({onClose,isOpen}) {
   
    return (
            <Modal isOpen={isOpen} onClose={onClose}>
                <div className={c.phone}>
                    <p>contact me!</p>
                </div>
            </Modal>
    )
}

export default Contact;