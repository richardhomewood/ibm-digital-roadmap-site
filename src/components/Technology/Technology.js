import './Technology.scss';
import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
// import eventBus from "../EventBus";

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import TechnologyNavigation from '../TechnologyNavigation/TechnologyNavigation';
// import API from '../API/API';

function Technology(props) {

    // const logosTitle = useRef();
   
    const { t } = useTranslation();

    useEffect(() => {
        const tl = gsap.timeline({paused:true});
        // tl.to(['.loading-image',wallLogo.current ], {autoAlpha:0},0);
        tl.play();
    },[]);

    

    // TODO: Rework all this below into compoennts
    // TODO: If data node exists then build page
    return (
        <div className={`section technology`}>
            <TechnologyNavigation technology={props.technology} />
            {i18next.exists('roadmap.'+props.technology+".title") &&
            <div className='content'>
                <h1>{t('roadmap.'+props.technology+".title")}</h1>
                {
                    t("roadmap."+props.technology + ".sections",{returnObjects: true}).map((s,i)=>{
                        console.log(s)
                        // TODO: If more than 1 media need a map loop to iterate them
                        return(
                            <div className='technology-section' id={"section-"+(i+1)}>
                                <div className="media">
                                    <button className="media-link" alt="media"  data-url={"./assets/images/"+s.media[0].url} ><img src={"./assets/images/"+s.media[0].image} alt=""/></button>
                                </div>
                                <div className='content-right'>
                                    <h2>{s.title}</h2>
                                </div>
                            </div>  
                        )
                    })
                 }
            </div>
            }
            {!i18next.exists('roadmap.'+props.technology+".title") &&
            <div className='content'>
                <h1>Technology Page: {props.technology}</h1>
                <h2>Technology Data not Found</h2>
            </div>
            }
        </div>
    )
}

export default Technology;