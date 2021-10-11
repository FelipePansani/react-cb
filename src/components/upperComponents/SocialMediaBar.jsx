import React, { useState, useEffect } from 'react';
import socialmediabarCSS from '../upperComponents/SocialMediaBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faRss, fa } from "@fortawesome/free-solid-svg-icons";

function SocialMediaBar() {

    return (
        <div className={socialmediabarCSS.socialmediabar}>
            <a href="#"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'flickr']} /></a>
            <a href="#"><FontAwesomeIcon icon={faRss} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'telegram-plane']} /></a>
        </div>
    )
}

export default SocialMediaBar
