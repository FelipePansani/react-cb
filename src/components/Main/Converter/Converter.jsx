import { useState, useEffect } from "react";
import ConverterCSS from './Converter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faRedoAlt, faSortDown } from "@fortawesome/free-solid-svg-icons";
import real from '../../images/790.png'
import usd from '../../images/220.png'
import euro from '../../images/978.png'
import pound from '../../images/540.png'

function Converter() {

    let [thisValue, setThisValue] = useState(
        { id: 0, rate: 1, value: 0 }
    )

    let [thisCurrency, setThisCurrency] = useState([
        { id: 1, rate: 5, final: 0 },
        { id: 2, rate: 6, final: 0 },
        { id: 3, rate: 0, final: 0 }
    ])

    const selectCurrency = (currency, id) => {

        id == 0 ?
            setThisValue(prevState => (
                { ...prevState, rate: Number(currency) }
            ))
            : setThisCurrency(prevState => (
                prevState.map(
                    (item) => item.id == id ? { ...item, rate: currency } : item
                )
            ))
    }

    const passValue = () => {
        setThisCurrency(prevState => (
            prevState.map((item) => ({ ...item, final: ((thisValue.rate / item.rate) * thisValue.value) })
            )
        ))
    }

    return (
        <div className={ConverterCSS.conversorBox}>
            <h2>Conversor de moedas</h2>

            <div className={ConverterCSS.conversor}>
                <p className={ConverterCSS.smallText}>Converter de</p>
                <div className={ConverterCSS.rowFirst}>
                    <Select className={ConverterCSS.firstSelect} func={selectCurrency} id={thisValue.id} />
                    <div className={ConverterCSS.output}>
                        <input
                            placeholder="0,00"
                            type="number"
                            onInput={e => setThisValue(prevState => (
                                { ...prevState, value: Number(e.target.value).toFixed(4) })
                            )} />
                        <span className={ConverterCSS.line}></span>
                    </div>

                    <a className={ConverterCSS.redo} onClick={() => passValue()}>
                        <FontAwesomeIcon icon={faRedoAlt} />
                    </a>

                </div>


                <p className={ConverterCSS.smallText}>para...</p>
                <div>
                    {thisCurrency.map(item =>
                        <div className={ConverterCSS.row} key={item.id}>
                            <Select func={selectCurrency} id={item.id} />
                            <Output value={item.final} />
                            <div className={ConverterCSS.redo}>
                            </div>
                        </div>
                    )}
                </div>

                <div className={ConverterCSS.bottomInfo}>
                    <div className={ConverterCSS.row}>
                        <div className={ConverterCSS.select}></div>
                        <div className={ConverterCSS.input}>
                            <p className={ConverterCSS.bottom}>Data de referência 04/03/2022</p>
                        </div>
                        <div className={ConverterCSS.redo}></div>
                    </div>

                    <div className={ConverterCSS.mais}>
                        <a href="#">Ver todas as moedas<FontAwesomeIcon icon={faChevronCircleRight} /></a>
                    </div>

                </div>

            </div>
        </div>
    )
}

function Select({ func, id }) {

    let currencies = [
        { id: 0, name: "Real (BRL)", rate: 1, img: real },
        { id: 1, name: "Dólar (USD)", rate: 5, img: usd },
        { id: 2, name: "Euro (EUR)", rate: 6, img: euro },
        { id: 3, name: "Libra (GBP)", rate: 7, img: pound },
    ]

    let [selected, setSelected] = useState(id !== 3 ? currencies[id] : { name: 'Selecionar moeda' })
    let [open, setOpen] = useState(false)

    window.addEventListener('click', (e) => {
        if (e.target.id !== 'dropdown' + id) {
            setOpen(false)
        }
    })

    return (
        <div className={ConverterCSS.select}>

            <button className={ConverterCSS.menu} id={'dropdown' + id} onClick={() => setOpen(!open)}>
                {selected.name !== 'Selecionar moeda' ? <img id={'dropdown' + id} src={selected.img} alt="" /> : null}
                <p id={'dropdown' + id}>{selected.name}</p>
                <FontAwesomeIcon
                    className={ConverterCSS.arrow}
                    style={open ? { transform: 'rotate(180deg)' } : null}
                    id={'dropdown' + id}
                    icon={faSortDown} />
            </button>

            <div className={ConverterCSS.dropdown}
                style={open ? { display: 'flex' } : { display: 'none' }}
            >
                {currencies.map(item => <a
                    key={item.id}
                    className={ConverterCSS.dropdownItems}
                    onClick={() => {
                        setSelected(item)
                        func(item.rate, id)
                    }}>
                    <img src={item.img} alt="" />
                    {item.name}</a>)}
            </div>

        </div>
    )
}


function Output(props) {
    let [finalValue, setFinalValue] = useState(0.0000)

    useEffect(() => {
        setFinalValue((props.value).toFixed(4))

        if (props.value == Infinity) {
            setFinalValue((0).toFixed(4))
        }

        console.log(props.value)
    }, [props.value])

    return (
        <div className={ConverterCSS.output}>
            <input type="number" value={finalValue} disabled />
            <span className={ConverterCSS.line}></span>
        </div>
    )
}

export default Converter;