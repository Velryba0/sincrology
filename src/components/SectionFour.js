import React from 'react';
import catalog from '../images/catalog1.png';
import item1 from '../images/catalog-item1.png';
import item2 from '../images/catalog-item2.png';
import item3 from '../images/catalog-item3.png';
import item4 from '../images/catalog-item4.png';

import '../sass/section-four.styles.scss';

const SectionFour = () => {
    return (
        <>
        <div className='bg4' >    
                <div className='column-1'>
        	        <img src={catalog} alt='Ambientes' />
                    <h1 >Ambientes</h1>        
                     <a>VER MÁS </a>
                </div>
                <div className='column-2'>
                    <img src={item1} alt='Ambientes' />
                    <img src={item2} alt='Ambientes' />
                    <img src={item3} alt='Ambientes' />
                    <img src={item4} alt='Ambientes' />
                </div>
        </div>
        </>
    )
}

export default SectionFour;