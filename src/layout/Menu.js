import React from 'react';
import logo from '../images/logo.png';

import '../Sass/menu.styles.scss';


const Menu = () => {
    return (
        <div className='menu'>
            <img src={logo} alt='logo' className='logo' />
            <a className='search'/>
            <a className='login'/>
            <a className='shop'/>
        </div>
    )
}

export default Menu;