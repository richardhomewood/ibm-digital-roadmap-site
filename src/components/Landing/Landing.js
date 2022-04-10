import './Landing.scss';
import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { useTranslation } from 'react-i18next';
import { Button } from  '@carbon/ibm-security';
import { ButtonSet } from '@carbon/react';

function Landing() {


    const { t } = useTranslation();

    useEffect(() => {
        const tl = gsap.timeline({paused:true});
        // tl.to(['.loading-image',wallLogo.current ], {autoAlpha:0},0);
        tl.play();
    },[]);



    return (
        <div className={`section landing`}>
            <div className='content-left'>
                <h1 className='title'>{t('landing.title')}<br /><span className={`blue`}>{t('landing.subtitle')}</span></h1>
                <p>{t('landing.content')}</p>
                <ButtonSet>
                <Button kind="primary">
                    Primary button
                </Button>
                </ButtonSet>
            </div>
          
        </div>
    )
}

export default Landing;