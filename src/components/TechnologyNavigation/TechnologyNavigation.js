import './TechnologyNavigation.scss';
import React, { useEffect} from 'react'
import gsap from "gsap";

import {  ReactComponent as HomeIconSVG } from '../../assets/images/nav-home-icon.svg'
import {  ReactComponent as YearsSVG } from '../../assets/images/years.svg'

// import { useTranslation } from 'react-i18next';
// import i18next from 'i18next';
import { useNavigate } from 'react-router-dom';

function TechnologyNavigation(props) {

    // const { t } = useTranslation();
    const navigate = useNavigate();

    const labelClicked=(e)=>{
    }

    const labelOver=(e)=>{
    }

    const labelOut=(e)=>{
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

        // intersection observer setup
        const observerOptions = {
            root: null,
            rootMargin: '48px',
            threshold: 0.7,
        };
  
        function observerCallback(entries, observer) {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log(entry.target.id.charAt(entry.target.id.length-1))
                highlightNav(parseInt(entry.target.id.charAt(entry.target.id.length-1)))
            }
            });
        }

        const sections = document.querySelectorAll('.technology-section');
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach((sec) => observer.observe(sec));

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
        tl.play();
    }

    return (
        <div className={`technology-navigation`}>
            <HomeIconSVG className='nav-home-icon' onClick={homeIconClicked} />
            <YearsSVG className='nav-years' />
        </div>
    )
}

export default TechnologyNavigation;