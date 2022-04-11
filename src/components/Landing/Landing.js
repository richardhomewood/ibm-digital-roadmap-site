import './Landing.scss';
import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { useTranslation } from 'react-i18next';
import { Button } from  '@carbon/ibm-security';
import { ButtonSet } from '@carbon/react';
import { Trans } from 'react-i18next';
import Atlas from '../Atlas/Atlas';

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
                <p><Trans i18nKey="landing.content" /></p>
                <ButtonSet>
                <Button kind="primary">
                    Explore Technology Atlas
                </Button>
                </ButtonSet>
            </div>
            <Atlas />
        </div>
    )
}

export default Landing;