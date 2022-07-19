import React from 'react'

import logo from '../img/espalda.gif';

import './fondo.css' ;
import './general.css';

import './contenido';


export default function espalda() {
  const contenido = "/";
  return (
    
    <div className='General'>

      <header className='cuadro-general'>
      <div className='input-block'>
          <form method='get' action={contenido}>
          <button className="btn-close" aria-label="Close"> Atras</button>
          </form>
          </div>
      <div className='title-espalda'>
            <label form='text'>Remo con mancuerna a un brazo</label>
      </div>

      <img className='espalda-gif' src={logo} WIDTH="250" HEIGHT="190" ALT="gif"/>
      
     
        <div class="container">
  <div class="row row-cols-4">
    
    <div className="col">Posición inicial: <br></br>
    *Coloca una mancuerna en el lado izquierdo de un banco plano. El banco se usa como soporte. <br></br>
    *Coloca tu rodilla derecha en la parte inferior del banco, dobla la cintura y coloca la mano derecha en la parte superior 
    de la banca. Tu torso debe estar casi paralelo al suelo, la espalda recta y los abdominales apretados.<br></br>
    *Baja hasta agarrar la mancuerna usando un agarre neutral (con los pulgares hacia arriba).<br></br>
    *Mantén el codo ligeramente flexionado y ponte en la posición anterior, sin arquear la espalda.
</div>
  </div>
</div>

        </header> 

      
    </div>
  )
}
