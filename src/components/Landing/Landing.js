import './Landing.scss';
import React, { useEffect, useRef, useState } from 'react'
// import Lottie from 'react-lottie-player'
// import logoAnimation from '../../assets/images/LockupAnimation_v09.json'
// import wipeAnimation from '../../assets/images/Homepage-swipe-transition-03.json'
// // import title from '../../assets/images/landing-title.png'
// import uefaLogo from '../../assets/images/uefa-logo.svg'

import gsap from "gsap";
// import eventBus from "../EventBus";

import { useTranslation } from 'react-i18next';
// import API from '../API/API';

function Landing() {

    // const logosTitle = useRef();
    // const[titlePlay, setTitlePlay] = useState(false);
    // const[wipePlay, setWipePlay] = useState(false);

    const { t } = useTranslation();

    useEffect(() => {
        const tl = gsap.timeline({paused:true});
        // tl.to(['.loading-image',wallLogo.current ], {autoAlpha:0},0);
        tl.play();
    },[]);

    const startClicked = (e) =>{
        // eventBus.dispatch("startButtonClicked", {});
        // setWipePlay(true);

        //tmp
        // eventBus.dispatch("leaveGame", {});
        // const tl = gsap.timeline({paused:true});
        // tl.to( '.landing', { autoAlpha:0,},0);
        // tl.to( '.landing', { display:"none"},1);
        // tl.play();

        //window._gtag('event', 'start', {'event_category': 'landing', 'event_label':'start'});
    }


    return (
        <div className={`section landing`}>
            <h1>Landing Page</h1>
            {/* <Lottie
                className='wipe'
                loop ={false}
                animationData={wipeAnimation}
                play={wipePlay}
            /> */}
            {/* <img src={background} alt="" className='background' ref={backgroundRef} />
            <img src={pogba} aria-label={t('landing.accessibility.pogbaImage')} alt={t('landing.accessibility.pogbaImage')} className='pogba' ref={pogbaRef} /> */}
            {/* <Lottie
                className='title'
                loop ={false}
                animationData={logoAnimation}
                play={titlePlay}
                aria-label={t('landing.accessibility.logo')}
                alt={t('landing.accessibility.logo')}
            /> */}
            {/* <img ref={ wallLogo } src={Logo8thWall} className="wall-logo" alt="" />
            <div ref={footer} className="footer">
                <button  ref={startButtonRef}  className='start-button' onClick={startClicked} aria-describedby={t('landing.accessibility.playButton')} >{t('landing.play')}</button>
                <button onClick={howToPlayClicked} ref={howToPlayRef} className="how-to-play" aria-describedby={t('landing.accessibility.howButton')}><img className="bolt-left" src={boltLeft} alt=""/>{t('landing.how')}<img className="bolt-right" src={bolt} alt=""/></button>
                <div className='logos-title' ref={logosTitle} >{t('landing.brought')}</div>
                <div className='logos' ref={logosRef}>
                    <img className='pepsi-logo' src={pepsiLogo} ref={pepsiLogoRef} aria-label={t('landing.accessibility.pepsiImage')}
                alt={t('landing.accessibility.pepsiImage')}/>
                    <div className='bar' ref={logoBarRef} alt=""></div>
                    <div className='right-logos'>
                        <img className='pizza-hut-logo' src={pizzaHutLogo} ref={pizzaHutLogoRef} aria-label={t('landing.accessibility.pizzaImage')}
                alt={t('landing.accessibility.pizzaImage')}/>
                        <img className='uefa-logo' src={uefaLogo} ref={uefaLogoRef} aria-label={t('landing.accessibility.uefaImage')}
                alt={t('landing.accessibility.uefaImage')}/>
                    </div>
                </div>
                <div className='logos-subtitle' ref={logosSubTitle} >{t('landing.partner')}</div>
                <p className="links" ref={linkRef} ><a target="_blank" href='https://www.pepsico.com/legal/terms-of-use' rel="noreferrer">{t('landing.terms')}</a>&nbsp;&nbsp;{t('landing.and')}&nbsp;&nbsp;
                <a target="_blank" href='https://www.pepsico.com/legal/privacy' rel="noreferrer">{t('landing.privacy')}</a></p>
                <div id="teconsent"></div>
            </div> */}
        </div>
    )
}

export default Landing;