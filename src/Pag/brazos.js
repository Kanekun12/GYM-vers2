import React from 'react';

import logo from '../img/brazos.gif';

import './contenido';

import './fondo.css' ;
import './general.css';

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
            <label form='text'>Peso muerto con barra</label>
      </div>

      <img className='brazos-gif' src={logo} WIDTH="250" HEIGHT="190" ALT="gif"/>

     
        <div class="container">
  <div class="row row-cols-4">
    
    <div className="col">Esta es la triple receta que necesitas si quieres ganar músculo y 
    quemar grasa. Pero centrémonos en el peso muerto, uno de nuestros ejercicios favoritos
     y uno de los más complicados de ejecutar correctamente.
     <br></br> <br></br>
     1- La barra se coloca en la mitad del pie aproximadamente.
     <br></br>
     2- Las manos situadas por fuera de las espinillas.
     <br></br>
     3- Escápulas en la perpendicular de la barra, alineadas con ella.
</div>
  </div>
</div>

        </header> 

      
    </div>
  )
}

