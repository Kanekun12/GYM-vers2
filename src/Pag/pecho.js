import React from 'react';

import logo from '../img/pecho.gif';


import './fondo.css' ;
import './general.css';

import './contenido';

export default function brazos() {
  const contenido = "/";
  return (
    <div className='General'>

      <header className='cuadro-general'>
      <div className='input-block'>
          <form method='get' action={contenido}>
          <button className="btn-close" aria-label="Close"> Atras</button>
          </form>
          </div>
    
      
      <div className='title-bra'>
            <label form='text'>Press de banca inclinado</label>
      </div>

      <img className='pecho-gif' src={logo} WIDTH="250" HEIGHT="190" ALT="gif"/>
      
     
        <div class="container">
  <div class="row row-cols-4">
    
    <div className="col">Acuéstate en un banco con una inclinación de 45 grados y 
    sostén un par de mancuernas en tus manos. Estira tus brazos desde el pecho hacia 
    afuera agarrando ambas pesas con las palmas de las manos mirando hacia enfrente. 
    Vuelve a la posición inicial y repite 20 vecez.
</div>
  </div>
</div>

        </header> 

      
    </div>
  )
}
