import React, { useState, useEffect } from 'react'
import NotasImprensaCSS from "../components/NotasImprensa.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronCircleRight, fa } from "@fortawesome/free-solid-svg-icons";
import rightArrow from './images/right-arrow-angle.png'

function NotasImprensa() {
    return (
        <div className={NotasImprensaCSS.notasimprensa}>
            <h2>Notas à imprensa</h2>
            <div className={NotasImprensaCSS.notas}>
                <Notas content="Deserunt quae repellendus qui corporis repudiandae amet et illum alias aperiam harum sapiente quia ratione, culpa aliquid sed quo quasi perferendis cum." />
                <Notas content="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            </div>

            <div className={NotasImprensaCSS.maisNotas}>
                <a href="#">Mais notas à imprensa<FontAwesomeIcon icon={faChevronCircleRight} /></a>
            </div>
        </div>
    )
}


function Notas(props) {
    return (
        <div className={NotasImprensaCSS.nota}>
            <a href="#" >
                <span>
                    <FontAwesomeIcon icon={faChevronRight} />16/08/2021
                </span>
                16/08/2021
                {props.content}
            </a>
        </div>
    )
}

export default NotasImprensa;