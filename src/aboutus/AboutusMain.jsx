import React from 'react';
import AboutUsMainStyle from './AboutusMain.module.css';
import Header from '../components/Header';
import AboutUsImg from './AboutUsImg/AboutUs.png';
import title from './AboutUsImg/title.png';

function AboutusMain() {
    return (
        <div>
            <div style={{height: '15000px'}}>
                <Header/>
                <img src={AboutUsImg} alt="AboutUsImg" className={AboutUsMainStyle.AboutUsImg} />
                {/* <div className={AboutUsMainStyle.titleContainer}><img src={title} alt="title" className={AboutUsMainStyle.title} /></div> */}
                <img src={title} alt="title" className={AboutUsMainStyle.title} />
            </div>
        </div>
    )
}

export default AboutusMain