import React, { useState, useEffect } from 'react'
import CotationCSS from '../components/Cotation.module.css'

function Cotation() {
    let [currencies, setCurrencies] = useState([])
    let dollar, euro, real;
    let today = new Date().toISOString().split('T')[0]

    useEffect(() => {
        const apiKey = '8f9e171a27bb0307f0f36f98e5c68982'
        const url = `http://api.exchangeratesapi.io/v1/${today}?access_key=${apiKey}`

        async function fetchData() {
            await fetch(url)
                .then(res => res.json())
                .then(data => setCurrencies(data.rates))
                .catch(err => console.log(err))
        }

        fetchData()

    }, [])

    real = currencies.BRL
    dollar = (real / currencies.USD).toFixed(4)
    euro = (real / currencies.EUR).toFixed(4)

    return (
        <div className={CotationCSS.cotation}>
            <h2>Cotação</h2>
            <div className={CotationCSS.allLists}>
                <CurrencyList currency="Dólar EUA" currencyRate={dollar} date={today} />
                <CurrencyList currency="Euro" currencyRate={euro} date={today} />
            </div>
        </div>
    )
}


function CurrencyList(props) {
    let yesterday = new Date
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday = yesterday.toISOString().split('T')[0]

    return (
        <div className={CotationCSS.currencyList}>

            <div className={CotationCSS.row}>
                <p className={CotationCSS.boldText}>{props.currency}</p>
                <p className={CotationCSS.boldText}>Compra (R$)</p>
                <p className={CotationCSS.boldText}>Venda (R$)</p>
            </div>

            <div className={CotationCSS.row}>
                <p>{props.date}</p>
                <p>{props.currencyRate}</p>
                <p>{props.currencyRate}</p>
            </div>

            <div className={CotationCSS.row}>
                <p>{props.date}</p>
                <p>{props.currencyRate}</p>
                <p>{props.currencyRate}</p>
            </div>
        </div>

    )
}

export default Cotation
