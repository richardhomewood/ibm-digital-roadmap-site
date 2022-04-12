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

    const dotClicked=(e)=>{
        console.log(e.currentTarget.id)
        
    }

    const dotOver=(e)=>{
        console.log(e.currentTarget.id)
        gsap.to(e.currentTarget,{scale:4})

    }

    const dotOut=(e)=>{
        console.log(e.currentTarget.id)
        gsap.to(e.currentTarget,{scale:1})
    }

    useEffect(() => {
        const tl = gsap.timeline({paused:true, delay:1});
        tl.set(".atlas-container",{autoAlpha:1});
        tl.set(["#circle-1","#circle-2","#circle-3"],{scale:0, svgOrigin:"300px 300px", transformOrigin:"-50% -50%"});
        tl.set("#dot-1-6",{transformOrigin:"50% 50%"})
        // tl.to(["#dot-1-1"],{scale:0})
        // tl.to(".dot",{scale:2,duration:1.0,},.25)
        // tl.to(".dot",{scale:1,duration:1.0,},1.25)
        tl.to(["#circle-3", "#circle-2","#circle-1"  ],{stagger:.4, scale:1,duration:2.0, ease:"back.out"},0);
        // tl.to(['.loading-image',wallLogo.current ], {autoAlpha:0},0);
        tl.play();

        document.querySelector("#year-1-text").innerHTML = "2025"
        document.querySelector("#dot-1-6").addEventListener("click",dotClicked);
        document.querySelector("#dot-1-6").addEventListener("mouseover",dotOver);
        document.querySelector("#dot-1-6").addEventListener("mouseout",dotOut);

    },[]);
    


    return (
        <div className={`section atlas`}>
            <div className='atlas-container'><AtlasSVG /></div>
        </div>
    )
}

export default Atlas;