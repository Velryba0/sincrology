import React from 'react';
import logo from '../images/logo.png';

import '../sass/menu.styles.scss';


const Menu = () => {
    return (
        <div className='menu'>
            <div className='menu-container'>
                <img src={logo} alt='logo' className='logo' />
                <a className='menu-buyEnvironments' >COMPRA POR AMBIENTES</a>
                <a className='menu-branch' >SUCURSALES</a>
                <a className='menu-loyalty' >LOYALTY PROGRAM</a>
            </div>
            <a className='menu-livingRoom' >SALA</a>
            <a className='menu-diningRoom' >COMEDOR</a>
            <a className='menu-bedroom' >RECAMARA</a>
            <a className='menu-carpet' >TAPETES</a>
            <a className='menu-external' >EXTERIOR</a>
            <a className='menu-search'/>
            <a className='menu-login'/>
            <a className='menu-shop'/>
        </div>
    )
}

export default Menu;