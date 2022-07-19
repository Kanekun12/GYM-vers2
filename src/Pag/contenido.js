import React from 'react'

import logo1 from '../img/gym.png';
import Ruta from '../Rutas/Ruta';

import { signOut } from 'firebase/auth';
import { auth } from '../fire';


import './informe';
import './pecho';
import './brazos';
import './pierna';
import './abdomen';
import './espalda';
import './gluteos';

import './fondo.css';
import './contenido.css';




export default function Contenido( {

  
  user,
  setAuthState,
  setUser
}) {
  const informe = "/informe";

  const Pecho = '/pecho';
  const brazos = '/brazos';
  const pierna = '/pierna';
  const espalda = '/espalda';
  const gluteos = '/gluteos';
  const abdomen = '/abdomen';

  
  const signOutHandler = () => {
      signOut(auth)
      .then(() => {
          setUser(null);
          setAuthState('login');
      })
      .catch((err) => console.log(err));
  }

  
  return (
    
    <div className='Contenido'>

        <header className='cuadro-contenido'>
        <div className='perfil1'>         
            <button 
                onClick={signOutHandler}
                className='Cerrar'>
                Cerrar Sesion
            </button>  
        </div>
          
        

      <div className="title">GYM ANYTIME</div>

        <img className='contenido-logo' src={logo1} WIDTH="250" HEIGHT="250" ALT="logo"/>


        <header className='botones'>
          <div className='title-ejercicios'>
            <label form='text'>EJERCICIOS </label>
            
          </div>
            
            
            
            <div className='input-block'>
            <div>
            <form method='get' action={informe}>
            <button className='botones' type='submit'>Cardio</button>
            </form>
            </div>
            <div>
            <form method='get' action={Pecho}>
            <button className='botones' type='submit'>Pecho</button>
            </form>
            </div>
            <div>
            <form method='get' action={brazos}>
            <button className='botones' type='submit'>Brazos</button>
            </form>
            </div>
            <div>
            <form method='get' action={pierna}>
            <button className='botones' type='submit'>Piernas</button>
            </form>
            </div>
            <div>
            <form method='get' action={espalda}>
            <button className='botones' type='submit'>Espalda</button>
            </form>
            </div>
            <div>
            <form method='get' action={gluteos}>
            <button className='botones' type='submit'>Gluteos</button>
            </form>
            </div>
            <div>
            <form method='get' action={abdomen}>
            <button className='botones' type='submit'>Abdomen</button>
            </form>
            </div>
            </div>
          </header>


        </header>

        



    </div>


    

        
    
  )
}
