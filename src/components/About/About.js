import React from 'react'
import * as c from './about.module.scss';



const About = () => {
    return (
        <section id="about" className={` ${c.about}`}>
            <div className='grid'>
            <div className={`z5 col2 end1__r ${c.spacer}`}>
                <h3 className={`long ${c.paragraph} ${c.bg}`}>
                    simon zhang is a cross-disciplinary designer based in ATL {'&'} SEA —
                    netscape-oriented with a windows aero slant. 
                    working towards a more inclusive yesterday.™ <a>lets connect</a> {'<3'}
                        
                </h3>
            </div>
            <div className={`z5 col2 end5__r ${c.split} text`}>
                <div>
                    <p className={c.bg}>
                        Currently studying Industrial Design at Georgia Tech, with a minor in Sustainable Cities.
                    </p>
                </div>
                
                <div>
                    <div className={c.bg}>
                        <h4>Listening to:</h4>
                        <p><a href="https://soundcloud.com/y4ndere/alpha-halo-blackwinterwells">
                            alpha halo w/ blackwinterwells by yandere
                            </a></p>
                    </div>
                    <div className={c.bg}>
                        <h4>Reading right now: </h4>
                        <p><a href="https://books.google.com/books/about/Claiming_Diaspora.html?id=Vzv2DrzAL7UC">
                            Claiming Diaspora by Su Zheng
                            </a></p>
                    </div>

                   
                   
                </div>
            </div>
            </div>
          
        </section>
    )
}


export default About;