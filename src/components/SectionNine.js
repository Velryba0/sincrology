import React, { useState } from 'react';

import '../sass/section-nine.styles.scss';

const SectionNine = () => {

	const [mail, setMail] = useState('Ingresa tu dirección de correo electrónico')

    function validateForm(e) {
        e.preventDefault();
		var x = document.forms["myForm"]["fname"].value;
		var emailCond = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
		
        // console.log(x)
        if (x == "" || emailCond) {
          alert("Por favor ingresa un correo válido");
          return false;
        }
	  }     
	  
	const focus = () => {
		document.forms["myForm"]["fname"].value = '';
	}

	const mailChange = (e) => {
		setMail(e.target.value);
	}

    return (
        <div className='bg9'>
            <div className='row-1'>
                <p>Sé de los primeros en acceder a información exclusiva sobre las últimas colecciones y descuentos</p>
            </div>
            <div className='row-2'>
                <form name="myForm" onSubmit={validateForm}>
                <input className='input-1' type="text" name="fname"  onFocus={focus} onChange={mailChange} value={mail}/>
                <input className='input-2' type="submit" value="SUSCRÍBETE AL NEWSLETTER"/>
                </form>
            </div>
            <div className='row-3'>
				<div className="checkbox-container">
					<input type="checkbox" value="None" id="checkbox-container" name="check" />
					<label htmlFor="checkbox-container"></label>
				</div>
				<p>He leído y acepto los términos y condiciones relativos al tratamiento de mis datos personales</p>
            </div>
        </div>
    )
}

export default SectionNine;
