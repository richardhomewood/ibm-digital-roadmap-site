import './Footer.scss';
import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { useTranslation } from 'react-i18next';
import { Button } from  '@carbon/ibm-security';
import { ButtonSet } from '@carbon/react';
import IBMLogoWhite from '../../assets/images/ibm-logo-white.svg'

function Footer() {


    const { t } = useTranslation();
    const page= useRef();

    useEffect(() => {
        const tl = gsap.timeline({paused:true});
        tl.to(page.current, {bottom:0, duration:1},2);
        tl.play();
    },[]);



    return (
        <div ref={page} className={`section footer`}>
            <img src={IBMLogoWhite} alt="IBM Logo" className='logo' />
        </div>
    )
}

export default Footer;