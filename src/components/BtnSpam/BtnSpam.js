import React from 'react'
import {useState, useEffect} from 'react'
import * as c from './btnspam.module.scss';
import Button from '../Button';
// found here: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

function randomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return [Math.floor(Math.random() * (max - min + 1)) + min, Math.floor(Math.random() * (max - min + 1)) + min];
}

function checkPoint(point1,point2,r) {
    const dist = getDistance(point1[0],point1[1],point2[0],point2[1]);
    
    return (dist > r);
}

function getDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    
    return Math.sqrt(x * x + y * y);
}

function randomize(count, min, max) {

    let arr =[]
    for (var i = 0; i < count; i++) {
        if (arr.length > 0) {
            let test;
            let r = 30
            for (var repeat = 0; repeat < 10; repeat++) {
                let track = false;
                test = randomInt(min,max)
                arr.forEach(e => {
                    track = checkPoint(test,e,r)
                })
                if (track) {
                    repeat = 11;
                } 
                if (repeat > 5) {
                    r+= -5
                }
            }
            arr.push(test);
          
        } else {

            arr.push(randomInt(min,max))

        }
    }
    return arr
}


const BtnSpam = ({children,count, color}) => {
    const [arr,setArr] = useState([])

    useEffect(() => {
        setArr(randomize(count,0,80))
      }, []);

    return ( 
        <React.Fragment>
            {arr.map((e, i) => (
                <Button color={color} height="3rem" width="15rem" className="absolute" style={{top: `${e[0]}%`, left: `${e[1]}%`}} key={i}>{children}</Button>
            ))}
        </React.Fragment>
    )
}

BtnSpam.defaultProps = {
    count: 5,
    color: '#FF9023'
}   

export default BtnSpam;