import React, { useState, useEffect } from 'react'
import BottomComponentCSS from "../components/BottomComponent.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faRss, fa } from "@fortawesome/free-solid-svg-icons";

function BottomComponent() {

    return (
        <div className={BottomComponentCSS.bottomcomponent}>
            <BottomItems />
            <BottomItems />
            <BottomItems />
            <BottomItems />
            <BottomItems />
            <BottomItems />
            <BottomItems />
        </div>
    )
}

function BottomItems() {

    return (
        <a href="#" className={BottomComponentCSS.box}>
            <div className={BottomComponentCSS.icon}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            Agenda BC#
        </a>
    )
}


export default BottomComponent
