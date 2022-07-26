import React from 'react';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



import { WebsiteList } from "../components/WebsiteList";
import { WebsiteForm } from "../components/WebsiteForm";



import Contenido from '../Pag/contenido';


import Informe from '../Pag/informe';
import Brazos from '../Pag/brazos';
import Pecho from '../Pag/pecho';
import Pierna from '../Pag/pierna';
import Abdomen from '../Pag/abdomen';
import Espalda from '../Pag/espalda';
import Gluteos from '../Pag/gluteos';



function Ruta() {
  return(
      <div>
        
        <Router>
          
          
                <Routes>
                  
               
             
                <Route exact path="/" element ={<Contenido/>}/>

                <Route path="list" element={<WebsiteList />} />
                <Route path="add" element={<WebsiteForm />} />
                <Route path="edit/:id" element={<WebsiteForm />} />
                <Route exact path="/informe" element ={<Informe/>}/>
                <Route exact path="/brazos" element ={<Brazos/>}/>
                <Route exact path="/pecho" element ={<Pecho/>}/>
                <Route exact path="/pierna" element ={<Pierna/>}/>
                <Route exact path="/abdomen" element ={<Abdomen/>}/>
                <Route exact path="/espalda" element ={<Espalda/>}/>
                <Route exact path="/gluteos" element ={<Gluteos/>}/>
                      
                </Routes>
                
        </Router>

    </div>
  )
}

export default Ruta