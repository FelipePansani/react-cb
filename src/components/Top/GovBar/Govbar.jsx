import React from 'react';
import GovbarCSS from './Govbar.module.css'

function Govbar() {
    return (
        <div className={GovbarCSS.govbar}>
            <div>
                <p>gov.br</p>
            </div>

            <div className={GovbarCSS.right}>
                <p>{'CORONAVÍRUS (COVID-19)'}</p>
                <p>ACESSO À INFORMAÇÃO</p>
                <p>PARTICIPE</p>
                <p>LEGISLAÇÃO</p>
                <p>ÓRGÃOS DO GOVERNO</p>
            </div>
        </div>
    )
}

export default Govbar;