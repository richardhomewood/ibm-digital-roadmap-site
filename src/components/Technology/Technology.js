import './Technology.scss';
import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
// import eventBus from "../EventBus";

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import TechnologyNavigation from '../TechnologyNavigation/TechnologyNavigation';
import { Modal } from '@carbon/ibm-security';
import ReactPlayer from 'react-player'


// import API from '../API/API';

function Technology(props) {

    // const logosTitle = useRef();
   
    const { t } = useTranslation();

    const [modalOpen,setModalOpen] = useState(false)
    const [mediaPlaying,setMediaPlaying] = useState(false)
    const [mediaURL,setMediaURL] = useState(null)

    const reactVideoRef = useRef();
    const page = useRef();

    useEffect(() => {
        const tl = gsap.timeline({paused:true});
        tl.call(()=>{
           window.scrollTo({
                top: 0,
            });
        },null,0)
        tl.to(page.current,{autoAlpha:1, duration:1.5},.5);
        tl.play();
        window.page=props.technology;
    },[props.technology]);

    const mediaClicked = (e) =>{
        const id = e.currentTarget.id;
        const url = e.currentTarget.dataset.url;

        console.log(id, url)
        // set content up
        setMediaURL(url)
        setMediaPlaying(true)
        reactVideoRef.current.seekTo(0)
        // show modal
        setModalOpen(true);
    }

    const closeMedia = () =>{
        setModalOpen(false);
        setMediaPlaying(true);
    }

    // TODO: Rework all this below into compoennts
    // TODO: If data node exists then build page
    return (
        <div ref={page} className={`section technology`}>
            <TechnologyNavigation technology={props.technology} />
            {i18next.exists('roadmap.'+props.technology+".title") &&
            <div className='content'>
                <h1>{t('roadmap.'+props.technology+".title")}</h1>
                {
                    t("roadmap."+props.technology + ".sections",{returnObjects: true}).map((s,i)=>{
                        console.log(s)
                        // TODO: If more than 1 media need a map loop to iterate them
                        return(
                            <div key={i} className='technology-section' id={"section-"+(i+1)}>
                                <div className="media">
                                    <button id={"media-"+props.technology+"-"+(i+1)} onClick={mediaClicked} className="media-link" alt="media"  data-url={s.media[0].url} ><img src={"./assets/images/"+s.media[0].image} alt=""/></button>
                                </div>
                                <div className='content-right'>
                                    <h2>{s.title}</h2>
                                    { 
                                        s.content.headerBlocks.map((hb,i)=>{
                                            return(
                                                <p key={i} className='header-block'>{hb}</p>
                                            )
                                        })
                                    }
                                    <div className='content-columns'>
                                    { 
                                       s.content.columns.map((c,i)=>{
                                        return(
                                            <div key={i} className='content-column'>
                                                <h6>{c.title}</h6>
                                                { 
                                                    c.blocks.map((cb,i)=>{
                                                        return(
                                                            <p key={i} className='block'>{cb}</p>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                    }
                                    </div>
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
            <Modal 
                className='media-player-modal'
                open={modalOpen}
                passiveModal = {true}
                onRequestClose={closeMedia}

            >
                <ReactPlayer
                    ref={reactVideoRef}
                    className="react-video-player"
                    url={mediaURL}
                    playing={mediaPlaying}
                    loop={true}
                    width='100%'
                    height='100%'
                   
                />
            </Modal>
        </div>
    )
}

export default Technology;