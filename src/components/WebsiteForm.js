import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { saveWebsite, getWebsite, updateWebsite } from "../firebase/api";
import { useParams, useNavigate } from "react-router-dom";

import './form.css';

import '../Pag/contenido';

const initialState = {
  Image: "",
  name: "",
  description: "",
};
export const WebsiteForm = (props) => {
  const [website, setWebsite] = useState(initialState);
  const params = useParams();
  const navigate = useNavigate();

  const handleInputChange = ({ target: { name, value } }) =>
    setWebsite({ ...website, [name]: value });

  const validURL = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validURL(website.url))
      return toast("invalid url", { type: "warning", autoClose: 1000 });

    if (!params.id) {
      await saveWebsite(website);
      toast("New Link Added", {
        type: "success",
      });
    } else {
      await updateWebsite(params.id, website);
      toast("Updated", {
        type: "success",
      });
    }

    // Clean Form
    setWebsite(initialState);
    navigate("/");
  };

  const getLinkById = async (id) => {
    try {
      const doc = await getWebsite(id);
      setWebsite({ ...doc.data() });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getLinkById(params.id);
    }
  }, [params.id]);

  
  const contenido = "/";
  return (
    <div className='Contenido'>

        <header className='cuadro-contenido'>
        <div className='input-block'>
          <form method='get' action={contenido}>
          <button className="btn-close" aria-label="Close"> Atras</button>
          </form>
          </div>

    
      <form onSubmit={handleSubmit} className="card card-body bg-secondary">
      

      <div class="select">
  <input type="file" class="form-control" id="inputGroupFile02"/>
  
  </div>

        <div className="formulario">
        <div className="titulos">
        <label htmlFor="url">Poner un link</label>
        </div>
          <div className="input-group-text bg-dark">
            <i className="material-icons"></i>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Pegarlo aqui"
            value={website.url}
            name="url"
            onChange={handleInputChange}
          />
        </div>

        <div className="formulario">
        <div className="titulos">
        <label htmlFor="name">Titulo:</label>
        </div>
        
          <div className="input-group-text bg-dark">
            <i className="material-icons"></i>
          </div>
          <input
            type="text"
            value={website.name}
            name="name"
            placeholder="Agregar un titulo"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>

        <div className="formulario">
        <div className="titulos2">
        <label htmlFor="description">Description:</label>
        </div>
        <textarea
          rows="3"
          className="form-control"
          placeholder="Agregar una description"
          name="description"
          value={website.description}
          onChange={handleInputChange}
        ></textarea>
        </div>


        <div className="botGuardar">
        <button
          className="btn btn-primary btn-block"
          disabled={!website.url || !website.name}
        >
          {props.currentId === "" ? "Save" : "GUARDAR-"}
        </button>
        </div>
      </form>
    
    </header>
    </div>
    
  );
};
