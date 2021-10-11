import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import converterCSS from '../components/Converter.module.css'
import realImg from './images/790.png'
import dolarImg from './images/220.png'
import euroImg from './images/978.png'
import libraImg from './images/540.png'

const Converter = () => {
    return (
        <div>
            <h2>Conversor de moedas</h2>
            <div className={converterCSS.converter}>
                <h6>Converter de</h6>
                <Select className activeCurrency="Real" enabled={true} />
                <h6>para..</h6>
                <Select activeCurrency="Dolar" enabled={false} />
                <Select activeCurrency="Euro" enabled={false} />
                <Select activeCurrency="Selecionar Moeda" enabled={false} />

                <h6>{Date.now().toString()}</h6>
            </div>
            <div className={converterCSS.maisMoedas}>
                <a href="#">Ver todas as moedas<FontAwesomeIcon icon={faChevronCircleRight} /></a>
            </div>
        </div>
    )
}

const Select = (props) => {

    const currencies = [
        { id: 1, name: "Real", image: realImg },
        { id: 2, name: "Dolar", image: dolarImg },
        { id: 3, name: "Euro", image: euroImg },
        { id: 4, name: "Libra", image: libraImg },
    ]

    const selecionarMoeda = { id: 5, name: "Selecionar Moeda", image: null }

    let active = props.activeCurrency == "Selecionar Moeda" ? selecionarMoeda : currencies.find(item => item.name == props.activeCurrency)

    const [currencySelected, setCurrencySelected] = useState(active)
    const [open, setOpen] = useState(false)

    const dropdownShow = {
        visibility: open ? "visible" : "hidden"
    }


    window.addEventListener('click', (e) => {
        if (e.target.id !== 'dropdown') {
            setOpen(false)
        }
    })

    let [rates, setRates] = useState([])
    let dollar, euro, real;
    let today = new Date().toISOString().split('T')[0]

    useEffect(() => {
        const apiKey = '8f9e171a27bb0307f0f36f98e5c68982'
        const url = `http://api.exchangeratesapi.io/v1/${today}?access_key=${apiKey}`

        async function fetchData() {
            await fetch(url)
                .then(res => res.json())
                .then(data => setRates(data.rates))
                .catch(err => console.log(err))
        }

        fetchData()

    }, [])

    return (
        <div className={converterCSS.select} style={{ flex: 1 }}>
            <div className={converterCSS.currencyList}>

                <li><a id="dropdown" onClick={() => setOpen(!open)} ><img id="dropdown" src={currencySelected.image} alt="" /> {currencySelected.name} </a></li>

                <div id='dropdown' className={converterCSS.dropdown} style={dropdownShow}>
                    {currencies.map((item, index) => item.name !== currencySelected.name ? <a key={item.id} onClick={() => setCurrencySelected(currencies[index])}> <img src={item.image} alt="" />{item.name}</a> : null)}
                </div>
            </div>

            <div className={converterCSS.inputBorder} >
                {!props.enabled ? <input className={converterCSS.Input} type="number" placeholder="0,00" disabled /> :
                <input className={converterCSS.Input} type="number" placeholder="0,00" /> }
            </div>
            {props.enabled && <a className={converterCSS.redo} href="#"><FontAwesomeIcon icon={faRedoAlt} /></a>}
        </div>
    )
}

export default Converter;
