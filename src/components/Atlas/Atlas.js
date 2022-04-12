import './Atlas.scss';
import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { useTranslation } from 'react-i18next';
import { Button } from  '@carbon/ibm-security';
import { ButtonSet } from '@carbon/react';
import { Trans } from 'react-i18next';
import {  ReactComponent as AtlasSVG } from '../../assets/images/atlas.svg'

function Atlas() {


    const { t } = useTranslation();

    useEffect(() => {
        const tl = gsap.timeline({paused:true});
        tl.set(".cls-1",{scale:0, svgOrigin:"300px 300px", transformOrigin:"-50% -50%"});
        tl.to(".dot",{scale:0})
        tl.to(".dot",{scale:2,duration:1.0,},.25)
        tl.to(".dot",{scale:1,duration:1.0,},1.75)
        tl.to([".circle-1", ".circle-2", ".circle-3" ],{stagger:.3, scale:1,duration:2, ease:"back.out"},0);
        // tl.to(['.loading-image',wallLogo.current ], {autoAlpha:0},0);
        tl.play();
    },[]);
    


    return (
        <div className={`section atlas`}>
            <div className='atlas-container'><AtlasSVG /></div>
        </div>
    )
}

export default Atlas;