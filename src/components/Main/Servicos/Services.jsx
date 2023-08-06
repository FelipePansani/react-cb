import React, { useState } from 'react'
import ServicesCSS from './Services.module.css'
import servicosTabLine from '../../images/servicos_tab_line.png'
import informacoesTabLIne from '../../images/informacoes_tab_line.png'
import analisesTabLIne from '../../images/analises_tab_line.png'
import icnCidadania from '../../images/icn_cidadania.png'
import icnCalc from '../../images/icn_calc_mini.png'
import icnAnalyt from '../../images/icn_analyt_mini.png'
import icnSearch from '../../images/icn_search_mini.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition, SwitchTransition } from 'react-transition-group';

function Services() {

    const Boxes = [
        {
            name: "Cidadão",
            color: "#e6cc7a",
            id: 'tabLineOne',
            image: icnCalc,
            tabLine: servicosTabLine,
            box: [
                { id: 0, name: 'Cidadania financeira' },
                { id: 1, name: 'Perguntas e respostas' },
                { id: 2, name: 'Cidadania financeira' },
                { id: 3, name: 'Cidadania financeira' },
                { id: 4, name: 'Cidadania financeira' },
                { id: 5, name: 'Cidadania financeira' }
            ]
        },
        {
            name: "Instituições Supervisionadas",
            color: "#086688",
            id: 'tabLineTwo',
            image: icnSearch,
            tabLine: analisesTabLIne,
            box: [
                { id: 0, name: 'Sisbacen' },
                { id: 1, name: 'Sisbacen' },
                { id: 2, name: 'Sisbacen' },
                { id: 3, name: 'Sisbacen' },
                { id: 4, name: 'Sisbacen' },
                { id: 5, name: 'Sisbacen' }
            ]
        },
        {
            name: "Analistas de Mercado",
            color: "#5e3e68",
            id: 'tabLineThree',
            image: icnAnalyt,
            tabLine: informacoesTabLIne,
            box: [
                { id: 0, name: 'Series' },
                { id: 1, name: 'Series' },
                { id: 2, name: 'Series' },
                { id: 3, name: 'Series' },
                { id: 4, name: 'Series' },
                { id: 5, name: 'Series' }
            ]
        },
    ]

    let [selectedBox, setSelectedBox] = useState(Boxes[0])

    return (
        <div className={ServicesCSS.services}>
            <h2>Serviços</h2>

            <div className={ServicesCSS.servicesBox}>

                <div className={ServicesCSS.upperList}>
                    {Boxes.map(item => <a key={item.name} onClick={() => setSelectedBox(item)}>
                        <UpButton active={selectedBox} button={item} /></a>)}
                </div>

                <div className={ServicesCSS.menuList}>
                    <div className={ServicesCSS.row}>
                        {selectedBox.box.map(item => item.id <= 2 ?
                            <SwitchTransition key={item.id}>
                                <CSSTransition key={selectedBox.id} timeout={0}>
                                    <a className={ServicesCSS.options} key={item.id} href="">
                                        <img src={icnCidadania} alt="" />
                                        <p>{item.name}</p>
                                    </a>
                                </CSSTransition>
                            </SwitchTransition>
                            : null)}
                    </div>

                    <div className={ServicesCSS.row}>
                        {selectedBox.box.map(item => item.id > 2 ?
                            <SwitchTransition key={item.id}>
                                <CSSTransition key={selectedBox.id} timeout={0}>
                                    <a className={ServicesCSS.options} key={item.id} href="">
                                        <img src={icnCidadania} alt="" />
                                        <p>{item.name}</p>
                                    </a>
                                </CSSTransition>
                            </SwitchTransition>
                            : null)}
                    </div>
                </div>
            </div>

            <div className={ServicesCSS.maisServiços}>
                <a href="#">Mais serviços<FontAwesomeIcon icon={faChevronCircleRight} /></a>
            </div>
        </div >
    )
}

function UpButton(props) {

    const activeBtnStyle = {
        background: '#ebebeb',
        border: "none",
    }

    if (props.active.name !== props.button.name) {
        return (
            <div className={ServicesCSS.upperBtn} style={{ borderColor: props.button.color }}>
                <span className={ServicesCSS.line} style={{ borderColor: props.button.color }}></span>
                <img src={props.button.image} alt="" />
            </div>
        )
    }
    else {
        return (
            <div>
                <SwitchTransition>
                    <CSSTransition key={props.active.name} timeout={0}>
                        <div className={ServicesCSS.activeUpBtn}>
                            <div className={ServicesCSS.upperBtn} style={activeBtnStyle}>
                                <img src={props.button.image} alt="" />
                                <p>{props.button.name}</p>
                            </div>
                            <div style={{ zIndex: 1 }}>
                                <img id={props.button.id} className={ServicesCSS.tabLine} src={props.button.tabLine} alt="" />
                            </div>
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        )
    }
}

export default Services