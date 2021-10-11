import React, { useState, useEffect } from 'react'
import FooterCSS from "../components/Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {

    function scrollUp() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    
    return (
        <div className={FooterCSS.footer}>
            <div className={FooterCSS.column}>
                <i>
                    <p className={FooterCSS.boldText}>Garantir a estabilidade do poder de compra da moeda, zelar por um sistema financeiro
                        sólido, eficiente e
                        competitivo, e fomentar o bem-estar econômico da sociedade.</p>
                </i>
            </div>

            <div className={FooterCSS.column + FooterCSS.rightText}>
                <p>Atendimento: 145 (custo de ligação local) | <a href="">Fale conosco</a> </p>
                <p> <a href="">Política de privacidade</a> |
                    <a href="">Política de acessibilidade</a> © Banco Central do Brasil - <a href="">Todos os direitos
                        reservados</a>
                </p>
            </div>

            <a onClick={() => scrollUp()} className={FooterCSS.upArrow}><FontAwesomeIcon icon={faChevronCircleUp} /></a>
        </div>

    )
}

export default Footer;