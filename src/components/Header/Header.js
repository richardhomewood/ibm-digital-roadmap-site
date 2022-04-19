import './Header.scss';
import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { useTranslation } from 'react-i18next';
import { Button, Dropdown, HeaderContainer, HeaderName } from  '@carbon/ibm-security';
import { ButtonSet, Heading, Theme } from '@carbon/react';
import IBMLogoBlack from '../../assets/images/ibm-logo-black.svg'
import { useNavigate } from 'react-router-dom';

function Header() {

    
    const navigate = useNavigate();

    const { t } = useTranslation();
    const page =useRef();

    useEffect(() => {
        const tl = gsap.timeline({paused:true});
        tl.to(page.current, {top:0, duration:1},0);
        tl.play();
    },[]);

    const items = t("header.technologies", {returnObjects: true});

    const navigationChanged=(e)=>{
        console.log(e.selectedItem.value)
        if(window.page===e.selectedItem.value) return
        const tl = gsap.timeline({paused:true, onComplete:()=>{  navigate('/'+e.selectedItem.value);}});
        tl.to('.section.technology',{autoAlpha:0, duration:.5},0);
        tl.play();
       
       
    }

    return (
        <div ref={page} className={`section header`}>
             <img src={IBMLogoBlack} alt="IBM Logo" className='logo' />
             <div className='divider'></div>
             <HeaderName href="../" prefix="" className='title'>{t('header.title')}</HeaderName>
             <div className='right'>
                 <Theme theme="white">
                    <Dropdown
                        ariaLabel="Navigation Dropdown"
                        id="navigation"
                        items={items}
                        label=""
                        className="navigation"
                        onChange={navigationChanged}
                    />
                </Theme>
             </div>
        </div>
    )
}

export default Header;