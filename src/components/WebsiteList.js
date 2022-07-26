import { useEffect, useState } from "react";
import { getWebsites } from "../firebase/api";
import { WebsiteCard } from "./WebsiteCard";

import '../Pag/contenido';
import './list.css';

export const WebsiteList = () => {
  const [websites, setWebsites] = useState([]);

  const getLinks = async () => {
    const querySnapshot = await getWebsites();
    // onGetLinks((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setWebsites(docs);
    // });
  };

  useEffect(() => {
    getLinks();
  }, []);

  const contenido = "/";
  return (
    
    
    <>
    <div className='Contenido'>

    


    <div className='butList'>
          <form method='get' action={contenido}>
          <button className="btn-close" aria-label="Close"> Atras</button>
          </form>
          </div>
    
      {websites.map((link) => (
        <div className="columActua" key={link.id}>
          
         <WebsiteCard link={link} />
         
        </div>
      ))}
      
      </div>  
    </>
  );
};
