import './Header.scss';
import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { useTranslation } from 'react-i18next';
import { Button, HeaderContainer, HeaderName } from  '@carbon/ibm-security';
import { ButtonSet, Heading } from '@carbon/react';
import IBMLogoBlack from '../../assets/images/ibm-logo-black.svg'

function Header() {


    const { t } = useTranslation();

    useEffect(() => {
        const tl = gsap.timeline({paused:true});
        // tl.to(['.loading-image',wallLogo.current ], {autoAlpha:0},0);
        tl.play();
    },[]);



    return (
        <div className={`section header`}>
             <img src={IBMLogoBlack} alt="IBM Logo" className='logo' />
             <div className='divider'></div>
             <HeaderName href="../" prefix="" className='title'>{t('header.title')}</HeaderName>
        </div>
    )
}

export default Header;