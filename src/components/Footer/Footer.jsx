import React, { } from 'react'
import FooterCSS from "./Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {

    function scrollUp() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <footer className={FooterCSS.footer}>
            <div className={FooterCSS.twoTexts}>
                <div>
                    <p className={FooterCSS.boldText}>
                        Garantir a estabilidade do poder de compra da moeda,
                        zelar por um sistema financeiro sólido, eficiente e
                        competitivo, e fomentar o bem-estar econômico da sociedade.
                    </p>
                </div>

                <div>
                    <p>Atendimento: 145 (custo de ligação local) | <a href="">Fale conosco</a>
                        <a href=""> Política de privacidade</a> |
                        <a href=""> Política de acessibilidade</a> © Banco Central do Brasil -
                        <a href=""> Todos os direitos reservados</a>
                    </p>
                </div>
            </div>

            <a onClick={() => scrollUp()} className={FooterCSS.upArrow}>
                <FontAwesomeIcon icon={faChevronUp} />
            </a>

            <span className={FooterCSS.line}></span>
        </footer>

    )
}

export default Footer;