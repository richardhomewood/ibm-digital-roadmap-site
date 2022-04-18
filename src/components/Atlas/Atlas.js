import './Atlas.scss';
import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { useTranslation } from 'react-i18next';
// import { Button } from  '@carbon/ibm-security';
// import { ButtonSet } from '@carbon/react';
// import { Trans } from 'react-i18next';
import {  ReactComponent as AtlasSVG } from '../../assets/images/atlas.svg'
import { useNavigate } from 'react-router-dom';

// NOTE:  atlas.svg must include preserveAspectRatio="xMidYMid meet"


function Atlas() {


    const { t } = useTranslation();
    const navigate = useNavigate();

    const dotClicked=(e)=>{
        const id = e.currentTarget.id
        const _t = id.charAt(id.length-1)
        const _r = id.charAt(id.length-3)
        const tech = t("header.technologies",{returnObjects: true})[_t].value
        const year = t("atlas.years",{returnObjects:true})[_r-1].id
        //const color = t("header.technologies",{returnObjects: true})[_t].color
        console.log("over",id, tech, year )
        navigate('/'+tech);
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

    const labelClicked=(e)=>{
        const id = e.currentTarget.id
        const _t = id.charAt(id.length-1)
        const tech = t("header.technologies",{returnObjects: true})[_t].value
        //const color = t("header.technologies",{returnObjects: true})[_t].color
        console.log("over",id, tech )
        navigate('/'+tech);
    }

    const labelOver=(e)=>{
        const id = e.currentTarget.id
        const _t = id.charAt(id.length-1)
        const tech = t("header.technologies",{returnObjects: true})[_t].value
        //const color = t("header.technologies",{returnObjects: true})[_t].color
        // const color = "#0F62FE";
        console.log("over",id, tech )

        // TODO Update to the color of the line based on last digit
        gsap.to(e.currentTarget,{scale:2, duration:.5, ease:"back.out"})

    }

    const labelOut=(e)=>{
        console.log("out", e.currentTarget.id)
        gsap.to(e.currentTarget,{scale:1})
    }

    useEffect(() => {
        const tl = gsap.timeline({paused:true, delay:.25});
        tl.set(".atlas svg",{autoAlpha:1});
        tl.set(["#circle-1","#circle-2","#circle-3"],{scale:0, svgOrigin:"425px 300px", transformOrigin:"-50% -50%"});
        tl.set(["#label-1", "#label-2","#label-3","#label-4", "#label-5","#label-6"],{scale:0, fillOpacity:0});
    
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
        tl.to(["#label-1", "#label-2","#label-3","#label-4", "#label-5","#label-6" ],{stagger:.2, opacity:1, fillOpacity:1, scale:1, duration:1.0, ease:"back.out"},"-=.5");
        // tl.to(['.loading-image',wallLogo.current ], {autoAlpha:0},0);
        tl.play();

       
        
        for (let t=1; t<=6; t++){
            const el = document.querySelector("#label-" + t);
            el.addEventListener("click",labelClicked);
            el.addEventListener("mouseover",labelOver);
            el.addEventListener("mouseout",labelOut);
            // any global dot anaimtion for start
            if(t===1){ tl.set(el,{transformOrigin:"0% 50%"})}
            if(t===2){ tl.set(el,{transformOrigin:"0% 50%"})}
            if(t===3){ tl.set(el,{transformOrigin:"0% 50%"})}
            if(t===4){ tl.set(el,{transformOrigin:"100% 50%"})}
            if(t===5){ tl.set(el,{transformOrigin:"100% 50%"})}
            if(t===6){ tl.set(el,{transformOrigin:"100% 50%"})} 
        }
    

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
           <AtlasSVG />
        </div>
    )
}

export default Atlas;