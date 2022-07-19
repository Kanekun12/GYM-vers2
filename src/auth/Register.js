import * as React from 'react';

import Logo from '../img/logo.jpg';

import '../pages/Home';


import './registro.css';
import './fondo.css';

import { auth } from '../fire';
import { createUserWithEmailAndPassword } from 'firebase/auth'



export default function Register({

    
    
    setAuthState,
    setUser
}) {

    

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onSignUpHandle = () => {
        if(email !== null && password !== null) {
            createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setUser(user.user.email);
                setAuthState('home')
            })
            .catch((err) => {
                alert(err)
            })
        }
    }

   

    return (

        

        <div className='Registro'>
            <header className='blanco-header'>
                <img className='registro-logo' src={Logo}/>



            <header className='Formulario-header'>

            <div className="row-nomRegistro">
  
                <label>Registro</label>

            </div>


            <div className='Formulario-registro'> 


                
                <div className="nombre2">

                    <div  className="titulo">Correo</div>

                    <div className="barra2">


                    <input
                    type="email"
                    className="columna2"
                    id="email"
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='Ingrese su Email'
                    />
                    </div>
                </div>


                <div className="nombre2">

                    <div  className="titulo">Contraseña</div>
                    <div className="barra2">

                    <input
                    type="password"
                    className="columna2"
                    id="password"
                    name="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}  
                    placeholder='Ingrese su contraseña'
                    />
                    </div>
                </div>

                <div className='pregunta2'>
                    <p className='font-medium text-base'>¿Ya tienes una cuenta?</p>
                    
                    <button
                        onClick={() => setAuthState('login')}
                        className='lin2 linea2'>Iniciar Sesion</button>
                </div>

                <div className='Enviar'>
                    <button 
                        onClick={onSignUpHandle}
                        className='boton2 botone2'>
                        Enviar
                    </button>
                    
                </div>
                
            
        
            </div>
            </header>
            
            </header>
    
  

        </div>    
    )
}