import React from 'react';
import logo from '../images/logo.png';

import '../sass/menu-mob.styles.scss';

const MenuMobile = () => {
    const animatedMenu = () => {
		let element = document.getElementById('menu');
		let links = document.getElementById('links');
		if(element.className == 'menu-open') {
			element.setAttribute('class', 'menu-close');
			links.setAttribute('class', 'no-visible');
		} else if (element.className == 'menu-close') {
			element.setAttribute('class', 'menu-open');
			links.setAttribute('class', 'visible');
		}	
	}
    return (
        <div className='menu-mob'>
            <div className='menu-mob-container' onClick={animatedMenu}>
                <div id='menu'className='menu-close'/>
				<div id='links' className='no-visible' >
					<a className='menu-mob-buyEnvironments' >COMPRA POR AMBIENTES</a>
					<a className='menu-mob-branch' >SUCURSALES</a>
					<a className='menu-mob-loyalty' >LOYALTY PROGRAM</a>
					<a className='menu-mob-livingRoom' >SALA</a>
					<a className='menu-mob-diningRoom' >COMEDOR</a>
					<a className='menu-mob-bedroom' >RECAMARA</a>
					<a className='menu-mob-carpet' >TAPETES</a>
					<a className='menu-mob-external' >EXTERIOR</a>
				</div>
            </div>
            <img src={logo} alt='logo' className='logo-mob' />
            <a className='menu-mob-login'/>
            <a className='menu-mob-shop'/>
        </div>
    )
}

export default MenuMobile;