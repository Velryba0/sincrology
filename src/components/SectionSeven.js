import React from 'react';
import tendencyImg from '../images/img4.png'

import '../sass/section-seven.styles.scss';

const SectionSeven = () => {
    return (
        <>
        <div className='bg7'>
            <div className='row'>
                <div className='column'>
                    <h1>Nuevas tendencias en diseño de espacios colaborativos para el 2020</h1>
                    <p>Estamos viviendo en tiempos de cambio, es normal entrar a un oficina y encontrar marcadas diferencias con lo que se vivía hace 30 años, las nuevas tendencias y formas de trabajo que han surgido en los últimos años han obligado a los profesionales del diseño de interiores a reinventarse</p>
                    <button>SEGUIR LEYENDO</button>
                </div>
                <img src={tendencyImg} alt='tendency'/>
            </div>
        </div>
        </>
    )
}

export default SectionSeven;