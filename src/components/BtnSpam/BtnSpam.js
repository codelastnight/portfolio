import React from 'react'
import {useState, useEffect} from 'react'
import * as c from './btnspam.module.scss';
import Button from '../Button';
import distribute from './poordistribute';
import { motion } from "framer-motion"
// found here: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

const container = {
    hidden: { opacity: 0},
    show: { 
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
            duration: 0
          }
        }
  }
const variants = {
    hidden: { opacity: 0 },
    show: { 
        opacity: 1,
        transition: {
            duration: 0
        }
        }
  }



const BtnSpam = ({children,count, color}) => {
    const [arr,setArr] = useState()

    useEffect(() => {
        setArr(distribute(count,0,80))
      }, []);

    return ( 
        <React.Fragment>
             {arr && 
             <motion.div
                initial="hidden"
                whileInView="show"
                variants={container}
            >
            
            {arr.map((e, i) => (
                <motion.div 
                key={i}
                
                variants = {variants}
                >
                    <Button color={color} height="3em" width="15em" className={`absolute show__d`} style={{top: `${e[0]}%`, left: `${e[1]}%`}} >{children}</Button>

                </motion.div>
            ))}
        </motion.div> }
        <Button color={color} height="3em"  className={` show__m`}  >{children}</Button>

        </React.Fragment>
       
    )
}

BtnSpam.defaultProps = {
    count: 5,
    color: '#FF9023'
}   

export default BtnSpam;