import './Footer.scss';
import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { useTranslation } from 'react-i18next';
import { Button } from  '@carbon/ibm-security';
import { ButtonSet } from '@carbon/react';
import IBMLogoWhite from '../../assets/images/ibm-logo-white.svg'

function Footer() {


    const { t } = useTranslation();

    useEffect(() => {
        const tl = gsap.timeline({paused:true});
        // tl.to(['.loading-image',wallLogo.current ], {autoAlpha:0},0);
        tl.play();
    },[]);



    return (
        <div className={`section footer`}>
            <img src={IBMLogoWhite} alt="IBM Logo" className='logo' />
        </div>
    )
}

export default Footer;