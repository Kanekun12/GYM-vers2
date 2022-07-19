import * as React from 'react';


import Logo from '../img/logo.jpg';

import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../fire';

import './loginn.css';


import '../pages/Home';


function Login({
    setAuthState,
    setUser
}) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    const handleLogin = () => {
        if(email !== null && password !== null) {
            signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setUser(email)
                setAuthState('home')
            })
            .catch((err) => alert(err));
        }
    }

  return (


    <div className='Login'>
        <header className=''>
            
        <header className='blanco-header'>
        <img className='login-logo' src={Logo}/>
        
            <div className="row-login">Iniciar Sesion</div>

            <div className='Formulario-login'>

                <div className='nombre'>
                    <label className='text'>Correo</label>
                    <div className="barra">
                    <input
                        className='columna'
                        id="email"
                        name="email"  
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        
                        placeholder="INGRESE SU CORREO"
                    />
                    </div>    
                    

                </div>

                <div className='nombre'>
                    <label className='text'>Contraseña</label>
                    
                    <div className="barra">

                    <input
                
                        className="columna"
                        id="password"
                        name="password"  
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        
                        placeholder="INGRESE SU CONTRASEÑA"
                        type={"password"}
                    />
                    </div>
                </div>

                
                <div className='pregunta'>
                    <p className='font-medium text-base'>¿No tienes una cuenta?</p>


                    
                    <button 
                        onClick={() => setAuthState('register')}
                        className='lin linea'>Registrate</button>
                    
                </div>
              



                <div className='Iniciar'>

                
                    <button 
                        onClick={handleLogin}
                        className='boton botone'>Iniciar</button>
                        
                
                </div>
                
            </div>
                
             
          

        </header>   
        </header>
        
    
        </div>  

      


    
    )
}

export default Login;