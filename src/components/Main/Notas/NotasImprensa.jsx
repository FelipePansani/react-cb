import React from 'react'
import NotasImprensaCSS from "./NotasImprensa.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

function NotasImprensa() {
    return (
        <div className={NotasImprensaCSS.notasimprensa}>
            <h2>Notas à imprensa</h2>
            <div className={NotasImprensaCSS.notas}>
                <Notas content="Deserunt quae repellendus qui corporis repudiandae amet et illum alias aperiam harum sapiente quia ratione." />
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
            <a href="#">
                <span>
                    <FontAwesomeIcon icon={faChevronRight} />16/08/2021
                </span>
                {props.content}
            </a>
        </div>
    )
}

export default NotasImprensa;