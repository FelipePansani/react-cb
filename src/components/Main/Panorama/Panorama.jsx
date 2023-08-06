import { useState, useEffect, useRef } from 'react';
import PanoramaCSS from './Panorama.module.css'
import { Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

function Panorama() {
    let [selic, setSelic] = useState({
        id: 1,
        topInfo: ['Meta Intervalo de tolerância', '3,5% ± 1,5 p.p.'],
        title: 'Inflação',
        bottomInfo: ['10,54%', 'INFLAÇÃO', '12 meses'],
        dataset: [null, 3.1, 8.2, 8.3, 8.4, 7.8, 8.9, 9.0, 12.2, 3.4, 9.5, null]
    })

    let [inflation, setInflation] = useState({
        id: 2,
        topInfo: ['Reunião do Copom 02/02/2022'],
        title: 'Taxa Selic',
        bottomInfo: ['10,75%', 'TAXA SELIC'],
        dataset: [null, 3.1, 8.2, 8.3, 8.4, 7.8, 8.9, 9.0, 12.2, 3.4, 9.5, null]
    })

    let [loading, setLoading] = useState(false)
    const url = 'https://api.bcb.gov.br/dados/serie'
    const selicURL = `${url}/bcdata.sgs.4390/dados/ultimos/11?formato=json`
    const inflationURL = `${url}/bcdata.sgs.16121/dados/ultimos/11?formato=json`

    useEffect(() => {
        async function fetchData(setData, URL) {
            let response = await fetch(URL)
            let data = await response.json()
            setData(prevState => ({
                ...prevState, dataset: data
            })
            )
            setLoading(false)
        }

        // fetchData(setSelic, selicURL)
        // fetchData(setInflation, inflationURL)
    }, [])

    if (loading === true) {
        return (
            <div><h2>Loading...</h2></div>
        )
    }
    else {

        return (
            <div className={PanoramaCSS.panorama}>
                <h2 >Panorama econômico</h2>
                <div className={PanoramaCSS.actualPanorama}>
                    <div className={PanoramaCSS.chartsDiv}>
                        <Chart data={selic} />
                        <Chart data={inflation} />
                    </div>
                    <div className={PanoramaCSS.maisSeries}>
                        <a href="#">Mais séries<FontAwesomeIcon icon={faChevronCircleRight} /></a>
                    </div>
                </div>
            </div>
        )
    }
}


function Chart(props) {
    return (
        <div className={PanoramaCSS.chart}>
            <div className={PanoramaCSS.topChartInfo}>
                <p>{props.data.topInfo[0]}</p>
                {props.data.id == 1 ? <p>{props.data.topInfo[1]}</p> : ''}
            </div>

            <LineChart data={props.data.dataset} title={props.data.title} />

            <div className={PanoramaCSS.bottomChartInfo}>
                <p className={PanoramaCSS.number}>{props.data.bottomInfo[0]}</p>
                <p>{props.data.bottomInfo[1]} {props.data.id == 1 ?
                    <span>{props.data.bottomInfo[2]}</span> : ''}
                </p>
            </div>
        </div>
    )
}


function LineChart(props) {
    const lineRef = useRef('');
    const ctx = lineRef.current;
    const values = props.data;
    const realValues = [];
    const chartBlue = '#086688';
    let prev;

    for (let i = 0; i < 15; i++) {
        prev = values[i]
        realValues.push({ x: i, y: prev })
    }

    useEffect(() => {
        console.log(ctx)
    }, [])

    const totalDuration = 1500;
    const delayBetweenPoints = totalDuration / 24;

    const data = {
        labels: ['Jan/2021', 'Abr/2021', 'Jul/2021', 'Out/2021', 'Jan/2022', 'Abr/2022'],
        datasets: [{
            label: '',
            data: values,
            borderColor: chartBlue,
            backgroundColor: 'transparent',
        }],
    }
    const animation = {
        x: {
            type: 'number',
            easing: 'easeInQuad',
            duration: delayBetweenPoints,
            from: NaN,
            delay(ctx) {
                // if (ctx.type !== 'data' || ctx.xStarted) {
                //     return 0;
                // }
                ctx.xStarted = true;
                return ctx.index * delayBetweenPoints;
            }
        },
        y: {
            type: 'number',
            easing: 'easeInQuad',
            duration: delayBetweenPoints,
            from: values[0],
            delay(ctx) {
                // if (ctx.type !== 'data' || ctx.yStarted) {
                //     return 0;
                // }
                ctx.yStarted = true;
                return ctx.index * delayBetweenPoints;
            }
        }
    }

    const options = {
        maintainAspectRatio: false,
        animation,
        pointRadius: 0,
        hitRadius: 10,
        hoverRadius: 8,
        hoverBorderWidth: 2,
        borderWidth: 2.6,
        pointHoverBorderColor: '#fff',
        pointHoverBackgroundColor: chartBlue,
        pointStyle: 'circle',
        tension: 0.9,
        plugins: {
            legend: false,
            title: {
                display: true,
                text: props.title,
                color: chartBlue,
                font: {
                    weight: 'bold',
                    color: chartBlue,
                    size: 18,
                    family: 'Ubuntu',
                },
            },
            tooltip: {
                backgroundColor: '#ececec',
                titleColor: '#1b1b1b',
                bodyColor: '#1b1b1b',
                borderColor: chartBlue,
                borderWidth: 1,
                yAlign: 'bottom',
                cornerRadius: 0,
                displayColors: false,
                callbacks: {
                    afterTitle: () => { return props.title + ':' },
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    maxTicksLimit: 10,
                    color: 'gray'
                },
            },
            y: {
                title: {
                    display: true,
                    text: '% a.a.',
                },
                min: 0,
                max: 15,
                beginAtZero: false,
                ticks: {
                    maxTicksLimit: 4,
                    color: 'gray'
                }
            }
        }
    }

    return (

        <div className={PanoramaCSS.line} >
            <Line ref={lineRef} data={data}
                width={200}
                height={200}
                options={options}
            />
        </div >
    )
}

export default Panorama;