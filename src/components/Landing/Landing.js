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
            <h1>Landing Page</h1>
            <ButtonSet>
            <Button kind="primary">
                Primary button
            </Button>
            <Button kind="secondary">
                Secondary button
            </Button>
            </ButtonSet>
        </div>
    )
}

export default Landing;