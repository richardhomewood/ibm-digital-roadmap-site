import './TechnologyNavigation.scss';
import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";

import {  ReactComponent as HomeIconSVG } from '../../assets/images/nav-home-icon.svg'
import {  ReactComponent as YearsSVG } from '../../assets/images/years.svg'

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useNavigate } from 'react-router-dom';

function TechnologyNavigation(props) {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const labelClicked=(e)=>{
        // const id = e.currentTarget.id
        // const _t = id.charAt(id.length-1)
        // const tech = t("header.technologies",{returnObjects: true})[_t].value
        // //const color = t("header.technologies",{returnObjects: true})[_t].color
        // console.log("over",id, tech )
        // navigate('/'+tech);
    }

    const labelOver=(e)=>{
        // const id = e.currentTarget.id
        // const _t = id.charAt(id.length-1)
        // const tech = t("header.technologies",{returnObjects: true})[_t].value
        // const color = t("header.technologies",{returnObjects: true})[_t].color
        // console.log("over",id, tech )

        // // TODO Update to the color of the line based on last digit
        // gsap.to(e.currentTarget,{scale:2, fill:color})

    }

    const labelOut=(e)=>{
        // console.log("out", e.currentTarget.id)
        // gsap.to(e.currentTarget,{scale:1, fill:"#000000"})
    }


    useEffect(() => {
        const tl = gsap.timeline({paused:true});
        for(let i=1;i<=3;i++){
            tl.set('#year-'+i,{transformOrigin:"-25% 50%"});
            tl.set('#year-dot-'+i,{transformOrigin:"50% 50%"});

            const el = document.querySelector("#year-" + i);
            el.addEventListener("click",labelClicked);
            el.addEventListener("mouseover",labelOver);
            el.addEventListener("mouseout",labelOut);

        }
        // tl.to(['.loading-image',wallLogo.current ], {autoAlpha:0},0);
        tl.play();

        if(!props || !props.year) {
            highlightNav(1);
        }

    },[props]);

    const homeIconClicked = (e) =>{
        navigate('/');
    }

    const highlightNav = (index)=>{
        const tl = gsap.timeline({paused:true});
        //TODO: return others to 1 and default color
        for(let i=1;i<=3;i++){
            tl.to('#year-'+i,{scale:(i===index)? 1.4: 1.0, fill:(i===index)?"#0F62FE":"#ADA8A8"},0);
            tl.to('#year-dot-'+i,{scale:(i===index)? 1.4: 1.0,fill:(i===index)?"#0F62FE":"#ADA8A8"},0);
        }
       

        // TODO: Highlight dot , scale and color

        

        tl.play();
    }

    // TODO: Rework all this below into compoennts
    // TODO: If data node exists then build page
    return (
        <div className={`technology-navigation`}>
            <HomeIconSVG className='nav-home-icon' onClick={homeIconClicked} />
            <YearsSVG className='nav-years' />
        </div>
    )
}

export default TechnologyNavigation;