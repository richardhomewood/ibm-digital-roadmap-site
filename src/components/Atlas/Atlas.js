import './Atlas.scss';
import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { useTranslation } from 'react-i18next';
import { Button } from  '@carbon/ibm-security';
import { ButtonSet } from '@carbon/react';
import { Trans } from 'react-i18next';

function Atlas() {


    const { t } = useTranslation();

    useEffect(() => {
        const tl = gsap.timeline({paused:true});
        // tl.to(['.loading-image',wallLogo.current ], {autoAlpha:0},0);
        tl.play();
    },[]);



    return (
        <div className={`section atlas`}>
            
        </div>
    )
}

export default Atlas;