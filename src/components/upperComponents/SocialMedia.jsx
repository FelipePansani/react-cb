import React, { useState, useEffect } from 'react'
import SocialMediaCSS from "../upperComponents/SocialMedia.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faRss, fa } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';
import rightArrow from '../images/right-arrow-angle.png'


function SocialMedia() {
    const [open, setOpen] = useState(false);
    const translateStyle = {
        left: open ? "0px" : "",
    }

    return (
        <div className={SocialMediaCSS.socialmedia} style={translateStyle}>
            <div className={SocialMediaCSS.menu}>
                <a href="#"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a>
                <a href="#"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                <a href="#"><FontAwesomeIcon icon={['fab', 'flickr']} /></a>
                <a href="#"><FontAwesomeIcon icon={faRss} /></a>
                <a href="#"><FontAwesomeIcon icon={['fab', 'telegram-plane']} /></a>
            </div>

            <a className={SocialMediaCSS.arrowColumn} onClick={() => setOpen(!open)}>
                {/* <img src={rightArrow} alt="" /> */}
                <FontAwesomeIcon icon={faChevronRight} />
            </a>
        </div >
    )
}

export default SocialMedia