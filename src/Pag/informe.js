import React from 'react';

import logo from '../img/cardio.gif';




import './fondo.css' ;
import './general.css';



export default function informe() {
  const contenido = "/";
  return (
    <div className='General'>

      <header className='cuadro-general'>
      <div>

      <div className='input-block'>
          <form method='get' action={contenido}>
          <button className="btn-close" aria-label="Close"> Atras</button>
          </form>
          </div>  

      
      
      </div>
      <div className='title-info'>
            <label form='text'>Cinta de correr</label>
      </div>

      <img className='cardio-gif' src={logo} WIDTH="250" HEIGHT="190" ALT="gif"/>

     
        <div class="container">
  <div class="row row-cols-4">
    
    <div className="col">Los entrenamientos progresivos en cinta de correr son muy efectivos para mejorar la
     forma física. Con rutinas de entrenamientos de cinta de correr de 40 a 60 minutos, el trabajo será exigente. 
     Y, los resultados mejorarán de forma rápida. Además, es un plan de entrenamiento ameno, ideal para los propensos 
     al aburrimiento.
    <br></br><br></br>
     1.- Estira adecuadamente piernas y pies, así como manos y brazos.
     <br></br> 
     2.- Haz 25 minutos de carrera suave sobre la cinta de correr. Sin inclinación.
   
     
</div>

  </div>
</div>

    </header> 

      
    </div>
  )
}
