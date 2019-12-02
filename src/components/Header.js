import React from 'react';
import Menu from '../layout/Menu';
import MenuMobile from '../layout/MenuMobile';

const Header = () => {
	if(window.innerWidth > 450) {
		return ( 
			<Menu/>
		)
	} else {
		return (
			<MenuMobile/>
		)
	}
   
}

export default Header;