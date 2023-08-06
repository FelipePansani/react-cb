import { useState, useEffect } from 'react'
import CotationCSS from './Cotation.module.css'
import useDate from './useDate'

function Cotation() {
    let [loading, setLoading] = useState(false)
    // let { today, yesterday } = useDate();
    let days = { today: '27/05', yesterday: '26/05' }

    let [Currencies, setCurrencies] = useState({
        dollar: {
            name: 'Dólar EUA',
            buying: { last: 5.2001, secondLast: 5.3002 },
            selling: { last: 5.2001, secondLast: 5.3002 }
        },
        euro: {
            name: 'Euro',
            buying: { last: 6.1553, secondLast: 6.2553 },
            selling: { last: 6.3553, secondLast: 6.3553 }
        }
    })

    // Usando por data do dia anterior, por periodo pra pegar dependendo da hora do dia é complicado
    // usar em ultimo caso
    const olindaPrefix = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata"
    // const dolarCotationURL = `${olindaPrefix}/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='USD'&@dataCotacao='${yesterday}'&$top=8&$format=json&$select=cotacaoCompra,cotacaoVenda`
    // const euroCotationURL = `${olindaPrefix}/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='EUR'&@dataCotacao='${yesterday}'&$top=8&$format=json&$select=cotacaoCompra,cotacaoVenda`

    // useEffect(() => {
    //     async function fetchData(urlToBeFetched, dataToBeSet) {
    //         let response = await fetch(urlToBeFetched)
    //         let data = await response.json()
    //         dataToBeSet(data.value)
    //         console.log(data)
    //     }
    //     try {
    //         fetchData(dolarCotationURL, setDollar)
    //         fetchData(euroCotationURL, setEuro)
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }
    //     finally {
    //         setLoading(false)
    //     }
    // }, [])

    if (loading === true) {
        return (
            <div>
                <h4>Loading...</h4>
            </div>
        )
    }
    else {
        return (
            <div className={CotationCSS.cotation}>
                <h2 className={CotationCSS.boldText}>Cotação</h2>
                <div className={CotationCSS.cotationMain}>
                    <Currency days={days} currency={Currencies.dollar} />
                    <Currency days={days} currency={Currencies.euro} />
                </div>
            </div>
        )
    }
}

function Currency(props) {
    return (
        <div className={CotationCSS.currencyList}>
            <div className={CotationCSS.row} id={CotationCSS.firstRow}>
                <div className={CotationCSS.day}>
                    <p>{props.currency.name}</p>
                </div>
                <div className={CotationCSS.rates}>
                    <p>Compra (R$)</p>
                    <p>Venda (R$)</p>
                </div>
            </div>
            <div className={CotationCSS.row}>
                <div className={CotationCSS.day}>
                    <p>{props.days.yesterday} {"(PTAX)"}</p>
                </div>
                <div className={CotationCSS.rates}>
                    <p>{props.currency.buying.secondLast}</p>
                    <p>{props.currency.selling.secondLast}</p>
                </div>
            </div>
            <div className={CotationCSS.row}>
                <div className={CotationCSS.day}>
                    <p>{props.days.today} -13:00</p>
                </div>

                <div className={CotationCSS.rates}>
                    <p>{props.currency.buying.last}</p>
                    <p>{props.currency.selling.last}</p>
                </div>
            </div>


        </div>
    )
}

export default Cotation;