import './Header.scss';
import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { useTranslation } from 'react-i18next';
import { Button, Dropdown, HeaderContainer, HeaderName } from  '@carbon/ibm-security';
import { ButtonSet, Heading } from '@carbon/react';
import IBMLogoBlack from '../../assets/images/ibm-logo-black.svg'
import { useNavigate } from 'react-router-dom';

function Header() {

    
    const navigate = useNavigate();

    const { t } = useTranslation();

    useEffect(() => {
        const tl = gsap.timeline({paused:true});
        // tl.to(['.loading-image',wallLogo.current ], {autoAlpha:0},0);
        tl.play();
    },[]);

    const items = t("header.technologies", {returnObjects: true});

    const navigationChanged=(e)=>{
        console.log(e.selectedItem.value)
        navigate('/'+e.selectedItem.value);
    }

    return (
        <div className={`section header`}>
             <img src={IBMLogoBlack} alt="IBM Logo" className='logo' />
             <div className='divider'></div>
             <HeaderName href="../" prefix="" className='title'>{t('header.title')}</HeaderName>
             <div className='right'>
                <Dropdown
                    ariaLabel="Navigation Dropdown"
                    id="navigation"
                    items={items}
                    label=""
                    // titleText="Dropdown title"
                    className="navigation"
                    light={true}
                    onChange={navigationChanged}
                />
             </div>
        </div>
    )
}

export default Header;