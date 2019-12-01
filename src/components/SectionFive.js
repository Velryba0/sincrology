import React from 'react';
import catalag2 from '../images/book-alone.png'
import '../sass/section-five.styles.scss'

const SectionFive = () => {
    return (
        <>
        <div className='bg5'>
            <div className='column-1'>
                <h1 >ESTILO</h1>
                <h1 >ESCANDINAVO</h1>
                <a>EXPLORAR</a>
                <a>DESCARGA</a>
                <a>COMPRA POR AMBIENTES</a>
            </div>
            <div className='column-2'>
                <img src={catalag2} alt='catalog2'/>
            </div>
        </div>
        </>
    )
}

export default SectionFive;