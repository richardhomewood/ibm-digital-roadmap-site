import './TechnologyNavigation.scss';
import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";

import {  ReactComponent as HomeIconSVG } from '../../assets/images/nav-home-icon.svg'

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useNavigate } from 'react-router-dom';

function TechnologyNavigation(props) {

    const { t } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        const tl = gsap.timeline({paused:true});
        // tl.to(['.loading-image',wallLogo.current ], {autoAlpha:0},0);
        tl.play();
    },[]);

    const homeIconClicked = (e) =>{
        navigate('/');
    }

    // TODO: Rework all this below into compoennts
    // TODO: If data node exists then build page
    return (
        <div className={`technology-navigation`}>
            <HomeIconSVG className='nav-home-icon' onClick={homeIconClicked} />
        </div>
    )
}

export default TechnologyNavigation;