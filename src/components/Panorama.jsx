import React, { useState, useEffect } from 'react'
import PanoramaCSS from '../components/Panorama.module.css'
import { Chart } from "react-google-charts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, fa } from "@fortawesome/free-solid-svg-icons";

function Panorama() {
    return (
        <div className={PanoramaCSS.panorama}>
            <h2>Panorama económico</h2>
            <ChartSection title="Meta 3,75% Intervalo de tolerância ± 1,5 p.p." number="9,67%" label="INFLAÇÂO" />
            <ChartSection title="Reunião do Copom 04/08/2021" number="9,67%" label="TAXA SELIC" />
            <div className={PanoramaCSS.maisNotas}>
                <a href="#">Mais séries<FontAwesomeIcon icon={faChevronCircleRight} /></a>
            </div>
        </div>
    )
}


function ChartSection(props) {
    return (
        <div className={PanoramaCSS.half}>
            <p>{props.title}</p>
            <LineChart label={props.label} />
            <p className={PanoramaCSS.number}>9,67%</p>
            <p>{props.label} <span>12 meses</span></p>
        </div>
    )
}


function LineChart(props) {
    return (
        <div>
            <p className={PanoramaCSS.chartTitle}>{props.label}</p>
            <div className={PanoramaCSS.chart}>
                <Chart
                    width={180}
                    height={200}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        [
                            { type: 'number', label: 'x' },
                            { type: 'number', label: props.label },
                            { id: 'i0', type: 'number', role: 'interval' },
                            { id: 'i1', type: 'number', role: 'interval' },
                            { id: 'i2', type: 'number', role: 'interval' },
                            { id: 'i2', type: 'number', role: 'interval' },
                            { id: 'i2', type: 'number', role: 'interval' },
                            { id: 'i2', type: 'number', role: 'interval' },
                        ],
                        [1, 100, 90, 110, 85, 96, 104, 120],
                        [2, 120, 95, 130, 90, 113, 124, 140],
                        [3, 130, 105, 140, 100, 117, 133, 139],
                        [4, 90, 85, 95, 85, 88, 92, 95],
                        [5, 70, 74, 63, 67, 69, 70, 72],
                        [6, 30, 39, 22, 21, 28, 34, 40],
                        [7, 80, 77, 83, 70, 77, 85, 90],
                        [8, 100, 90, 110, 85, 95, 102, 110],
                        [9, 100, 90, 110, 85, 95, 102, 110],
                        [10, 100, 90, 110, 85, 95, 102, 110],
                        [11, 100, 90, 110, 85, 95, 102, 110],
                        [12, 100, 90, 110, 85, 95, 102, 110],
                    ]}
                    options={{
                        intervals: { style: 'none' },
                        legend: 'none',
                    }}
                />
            </div>
        </div>
    )
}

export default Panorama