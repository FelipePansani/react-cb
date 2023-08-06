import React, { useState } from 'react'
import SocialMediaCSS from "./SocialMedia.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faRss } from "@fortawesome/free-solid-svg-icons";

function SocialMedia() {
    const [open, setOpen] = useState(false);

    const translateStyle = {
        left: open ? "0px" : "",
    }

    return (
        <div className={SocialMediaCSS.socialmedia} style={translateStyle}>
            <div className={SocialMediaCSS.menu}>
                <button><FontAwesomeIcon icon={['fab', 'youtube']} /></button>
                <button><FontAwesomeIcon icon={['fab', 'twitter']} /></button>
                <button><FontAwesomeIcon icon={['fab', 'facebook-square']} /></button>
                <button><FontAwesomeIcon icon={['fab', 'instagram']} /></button>
                <button><FontAwesomeIcon icon={['fab', 'flickr']} /></button>
                <button><FontAwesomeIcon icon={['fab', 'linkedin']} /></button>
                <button><FontAwesomeIcon icon={['fab', 'telegram-plane']} /></button>
                <button><FontAwesomeIcon icon={faRss} /></button>
            </div>

            <div className={SocialMediaCSS.arrowColumn}
                id={!open ? SocialMediaCSS.closed : ''}
                style={{ transform: !open ? 'translateX(0px)' : '' }}
                onClick={() => setOpen(!open)}>
                <FontAwesomeIcon
                    style={{ transform: open ? 'rotate(-270deg) translateY(-4px)' : '' }}
                    icon={faSortDown}
                />
            </div>

        </div >
    )
}

export default SocialMedia