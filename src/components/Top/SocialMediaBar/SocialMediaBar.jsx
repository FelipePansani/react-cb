import React from 'react';
import socialmediabarCSS from './SocialMediaBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss } from "@fortawesome/free-solid-svg-icons";

function SocialMediaBar() {

    return (
        <div className={socialmediabarCSS.socialmediabar}>
            <div className={socialmediabarCSS.icons}>
                <button><FontAwesomeIcon icon={faRss} /></button>
                <button><FontAwesomeIcon icon={['fab', 'linkedin']} /></button>
                <button><FontAwesomeIcon icon={['fab', 'twitter']} /></button>
                <button><FontAwesomeIcon icon={['fab', 'flickr']} /></button>
                <button><FontAwesomeIcon icon={['fab', 'instagram']} /></button>
                <button><FontAwesomeIcon icon={['fab', 'facebook-square']} /></button>
                <button><FontAwesomeIcon icon={['fab', 'youtube']} /></button>
                <button><FontAwesomeIcon icon={['fab', 'telegram-plane']} /></button>
            </div>
        </div>
    )
}

export default SocialMediaBar
