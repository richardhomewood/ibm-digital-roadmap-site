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
        console.log("clicked", e.currentTarget.id)
        
    }

    const dotOver=(e)=>{
        const id = e.currentTarget.id
        const _t = id.charAt(id.length-1)
        const _r = id.charAt(id.length-3)
        const tech = t("header.technologies",{returnObjects: true})[_t].value
        const year = t("atlas.years",{returnObjects:true})[_r-1].id
        const color = t("header.technologies",{returnObjects: true})[_t].color
        console.log("over",id, tech, year )

        // TODO Update to the color of the line based on last digit
        gsap.to(e.currentTarget,{scale:4, fill:color})

    }

    const dotOut=(e)=>{
        console.log("out", e.currentTarget.id)
        gsap.to(e.currentTarget,{scale:1, fill:"#000000"})
    }

    useEffect(() => {
        const tl = gsap.timeline({paused:true, delay:1});
        tl.set(".atlas-container",{autoAlpha:1});
        tl.set(["#circle-1","#circle-2","#circle-3"],{scale:0, svgOrigin:"300px 300px", transformOrigin:"-50% -50%"});
    
        // dynamaically update svg text as needed
        // document.querySelector("#year-1-text").innerHTML = "2025"

        for(let r=1; r<=3; r++){
            for (let t=1; t<=6; t++){
                const el = document.querySelector("#dot-"+r+"-" + t);
                el.addEventListener("click",dotClicked);
                el.addEventListener("mouseover",dotOver);
                el.addEventListener("mouseout",dotOut);

                // any global dot anaimtion for start
                tl.set(el,{transformOrigin:"50% 50%"})
            }
        }
       
        tl.to(["#circle-3", "#circle-2","#circle-1"  ],{stagger:.4, scale:1,duration:2.0, ease:"back.out"},0);
        // tl.to(['.loading-image',wallLogo.current ], {autoAlpha:0},0);
        tl.play();

        // // clean up
        // return ()=> {
        //     for(let r=1; r<=3; r++){
        //         for (let t=1; t<=6; t++){
        //             const el = document.querySelector("#dot-"+r+"-" + t);
        //             el.removeEventListener("click",dotClicked);
        //             el.removeEventListener("mouseover",dotOver);
        //             el.removeEventListener("mouseout",dotOut);
        //         }
        //     }
        // }
    },[]);
    


    return (
        <div className={`section atlas`}>
            <div className='atlas-container'><AtlasSVG /></div>
        </div>
    )
}

export default Atlas;