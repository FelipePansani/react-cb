import React, { useState } from 'react'
import ServicesCSS from '../components/Services.module.css'
import tabLine from '../components/images/servicos_tab_line.png'
import icnCidadania from '../components/images/icn_cidadania.png'
import icnCalc from '../components/images/icn_calc_mini.png'
import icnAnalyt from '../components/images/icn_analyt_mini.png'
import icnSearch from '../components/images/icn_search_mini.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

function Services() {

    const Boxes = [
        {
            name: "Cidadão",
            color: "#e6cc7a",
            image: icnCalc,
            box: [
                { id: 0, name: 'Cidadão' },
                { id: 1, name: 'Cidadão' },
                { id: 2, name: 'Cidadão' },
                { id: 3, name: 'Cidadão' },
                { id: 4, name: 'Cidadão' },
                { id: 5, name: 'Cidadão' }
            ]
        },
        {
            name: "Sisbacen",
            color: "#086688",
            image: icnSearch,
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
            name: "Series",
            color: "#5e3e68",
            image: icnAnalyt,
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

    const activeBtnStyle = {
        background: '#ebebeb',
        border: "none",
    }

    let [selectedBox, setSelectedBox] = useState(Boxes[0])

    return (
        <div className={ServicesCSS.services}>
            <h2>Serviços</h2>
            <div className={ServicesCSS.servicesBox}>
                <div className={ServicesCSS.upperList}>
                    <ul>
                        {Boxes.map(item => <li style={selectedBox.name !== item.name ? { background: item.color } : null}>
                            <button style={selectedBox.name == item.name ? activeBtnStyle : null} onClick={() => setSelectedBox(item)}>
                                <img src={item.image} alt="" />
                                {selectedBox.name == item.name && `${item.name} ${<img className={ServicesCSS.tabLine} src={tabLine} alt="" />}`  }
                            </button>
                        </li>)}
                    </ul>
                </div>

                <div className={ServicesCSS.menuListShadow}>
                    <div className={ServicesCSS.menuList}>
                        <ServiceList selectedBox={selectedBox.box} />
                    </div>
                </div>
            </div>
            <div className={ServicesCSS.maisNotas}>
                <a href="#">Mais notas à imprensa<FontAwesomeIcon icon={faChevronCircleRight} /></a>
            </div>
        </div>
    )
}


function ServiceList(props) {
    return (
        <div className={ServicesCSS.menuList}>

            <div className={ServicesCSS.column}>
                {props.selectedBox.map(item => item.id <= 2 ? <li><img src={icnCidadania} alt="" /><a href="#">{item.name}</a></li> : null)}
            </div>

            <div className={ServicesCSS.column}>
                {props.selectedBox.map(item => item.id >= 3 ? <li><img src={icnCidadania} alt="" /><a href="#">{item.name}</a></li> : null)}
            </div>

        </div>
    )
}

export default Services