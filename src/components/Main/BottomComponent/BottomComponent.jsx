import React from 'react'
import BottomComponentCSS from "./BottomComponent.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function BottomComponent() {
    return (
        <div className={BottomComponentCSS.bottomComponent}>
            <div className={BottomComponentCSS.bottomComponentList}>
                <div className={BottomComponentCSS.bottomGroup}>
                    <BottomItems />
                    <BottomItems />
                    <BottomItems />
                    <BottomItems />
                </div>
                <div className={BottomComponentCSS.bottomGroup}>
                    <BottomItems />
                    <BottomItems />
                    <BottomItems />
                </div>
            </div>
        </div>
    )
}

function BottomItems() {
    return (
        <a href="#" className={BottomComponentCSS.bottomBox}>
            <div className={BottomComponentCSS.icon}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className={BottomComponentCSS.text}>
                Agenda BC#
            </div>
        </a>
    )
}


export default BottomComponent
