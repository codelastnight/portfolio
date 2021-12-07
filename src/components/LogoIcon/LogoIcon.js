import React from 'react'
import { motion, useViewportScroll, useSpring, useTransform } from "framer-motion"
import * as c from './logoicon.module.scss';
const LogoIcon = () => {
    const { scrollYProgress } = useViewportScroll()
    const yValue = useTransform(scrollYProgress, [0,1], [45,405])
    const pathLength = useSpring(yValue, { stiffness: 400, damping: 90 });

    return (
    <div className={c.logoicon}>
        <motion.div className={c.rotate} style={{ rotate: pathLength, originX: 0.5, originY: 0.5}}> 
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="44.9894" cy="6.13263" rx="5.9894" ry="6.13263" fill="#0034EB"/>
            </svg>


        </motion.div>
        

        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50.041 46.8202C47.9509 44.1566 43.8054 41.6586 40.9678 44.6611C39.8845 45.8072 39.102 48.1213 39.3936 49.7275C39.6764 51.2856 40.7493 52.8064 41.8532 53.8057C45.2051 56.8398 50.0314 53.3216 51.3456 49.3881C52.2706 46.6194 49.0304 44.6047 47.0508 44.0288" stroke="#0034EB" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M40.8161 44.7598C39.1709 42.0773 38.5782 39.9819 38.3281 36.8449C38.138 34.4613 37.7502 31.5428 38.3285 29.1775C38.9743 26.5367 40.3671 24.3177 42.989 23.7111C46.8053 22.8283 48.5841 26.2073 49.8015 29.5785C51.203 33.4595 50.308 39.5634 47.8294 42.7537C47.7493 42.8568 46.7603 44.0337 46.7343 43.7573C46.6681 43.0547 47.5293 42.1071 47.8444 41.5683C49.0543 39.4994 50.7045 37.948 52.4588 36.3925C54.4037 34.668 59.1573 33.998 60.9902 36.1498C62.7585 38.2257 62.0826 42.0746 61.0297 44.3179C59.8415 46.8495 57.4435 47.1228 55.0441 46.874C53.9154 46.7569 51.8022 46.4506 51.1512 45.2662C50.5423 44.1585 51.4314 44.5899 52.4816 44.8334C55.1927 45.4621 57.259 48.6169 57.6194 51.4169C58.1198 55.3034 56.0448 61.4861 51.3142 60.1859C49.2606 59.6215 48.3446 56.24 48.6361 54.1722C48.6794 53.8646 48.5251 52.4886 48.5545 53.3817C48.6224 55.4492 49.1483 57.2526 48.9351 59.3884C48.7126 61.6173 48.2918 63.7832 46.4996 65.158C44.818 66.448 43.3655 67.1764 41.5265 65.6686C39.9256 64.3559 39.9705 60.4932 40.3289 58.7105C40.6306 57.2096 41.0585 55.7268 41.4214 54.2425C41.5042 53.9037 42.5112 52.8775 42.0235 53.1088C40.5007 53.8313 39.0095 54.3942 37.3208 54.5574C33.3287 54.943 25.8599 55.6841 26.9366 49.0396C27.2278 47.2428 27.4329 46.2275 29.0434 45.3293C30.8699 44.3107 32.6289 44.0603 34.6842 44.2857C36.3038 44.4634 37.9174 45.2888 39.1489 46.4167C39.6332 46.8602 39.9954 47.2507 39.27 47.4037" stroke="#0034EB" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28.37 28.0747C27.9708 27.7722 27.4545 27.6933 26.9007 27.5993C26.0043 27.4471 25.0147 27.3085 24.0085 27.4313C23.5788 27.4838 22.3656 27.7472 22.2302 28.3278C22.1258 28.775 22.5489 29.3266 22.7046 29.6357C22.9853 30.1932 23.2679 30.7406 23.748 31.1538C24.7459 32.0125 25.9437 32.6797 27.0701 33.4079C27.9936 34.0049 28.8546 34.6678 29.7008 35.3422C30.049 35.6196 30.3372 35.9363 30.6026 36.2827C30.6566 36.3533 30.7413 36.5726 30.7941 36.4712C30.8924 36.282 30.8763 36.0177 30.9024 35.8362C30.9984 35.1697 31.0939 34.503 31.2119 33.8328C31.4972 32.2138 32.0133 30.55 32.1694 28.9522C32.2902 27.7157 32.3952 26.3648 32.0123 25.2935C31.7996 24.6982 30.7584 23.1758 29.6631 24.1886C29.2702 24.552 28.7398 25.0037 28.517 25.4547C28.3622 25.7682 28.2896 26.0937 28.1692 26.4087C28.0262 26.7828 27.8433 27.1576 27.7222 27.5321C27.6384 27.7911 27.5856 28.0383 27.69 28.2418C27.7439 28.3468 27.9111 28.6584 27.8558 28.5543" stroke="#0034EB" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M61.0977 59.0745C60.7504 58.5277 60.1595 57.3808 59.5389 58.1987C59.0532 58.8387 59.2141 60.1884 59.294 60.9549C59.334 61.3383 59.4663 61.642 59.5688 61.9981C59.6273 62.2016 59.5479 62.4187 59.6464 62.6099C59.8814 63.0659 59.995 62.8136 60.3452 62.436C60.6412 62.1168 64.0422 59.0295 63.2896 58.218C62.939 57.84 62.1216 58.4172 61.8502 58.6366C61.7596 58.7098 61.2052 59.3066 61.2052 59.1904" stroke="#0034EB" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="45" cy="45" r="39.5" stroke="#0034EB" stroke-dasharray="5,5"/>
        </svg>




    </div>
        
    )
}

export default LogoIcon