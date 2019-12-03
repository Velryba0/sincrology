import React from 'react';
import godaddy from '../images/godaddy.png'
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import pinterest from '../images/pinterestFinal.svg';

import '../sass/footer.styles.scss';

const Footer = () => {
    return (
        <div className='bgFooter'>
            <div className='row-1'>
                <a>COMPAÑÍA</a>
                <a>CONTACTO</a>
                <a>SÍGUENOS</a>
                <a>POLÍTICAS Y TÉRMINOS</a>
            </div>
            <div className='row-2'>
                <a>Acerca de Nosotros</a>
                <a>Localizador de Tienda</a>
                <div className='social'>
                    <img src={facebook} alt='facebook'/>
					<img src={instagram} alt='instagram'/>
					<img src={pinterest} alt='pinterest'/>
                </div>
                <a>Blog</a>
            </div>
            <div className='row-3'>
				<p>Copyright © 2019 Sincrology | Todos los derechos reservados</p>
				<img src={godaddy} alt='godaddy'/>
            </div>
        </div>
    )
}

export default Footer;