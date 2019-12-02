import React from 'react';
import book1 from '../images/book1.png';
import book2 from '../images/book2.png';
import book3 from '../images/book3.png';
import book4 from '../images/book4.png';
import catalog3 from '../images/catalog2.png';
import logo1 from '../images/logo-copia.png'
import '../sass/section-six.styles.scss';

const SectionSix = () => {
    return (
        <>
        <div className='bg6'>
            <div className='column'>
                <div className='row-1' >
                    <img src={book1} alt='book1'/>
                    <img src={book2} alt='book1'/>
                    <img src={book3} alt='book1'/>
                    <img src={book4} alt='book1'/>
                </div>
                <div className='row-2'>
                    <img src={catalog3} alt='book1'/>
                    <div className='column-1'>
                        <img src={logo1} alt='logo1'/>
                        <p>Sincrology es resultado de años de experiencia desarrollando y seleccionando soluciones afines a cualquier personalidad y estilo.</p>

                        <p>Visítanos en cualquier de nuestros showrooms en 
                        <span> Puebla/Zavaleta y CDMX/Altavista/Interlomas.</span></p>

                        <p>Contamos con la capacidad para contribuir en todo tipo de proyectos de decoración, poniendo a tu disposición una amplia gama de muebles, tapetes, persianas, cortinas, lámparas, artículos decorativos y una ilimitada variedad de estilos.</p>

                        <p>Nuestro objetivo es brindar un servicio que te acompaña en cada paso en la creación de ambientes que solucionen tus necesidades, dando a tus espacios un estilo único y personal.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SectionSix;