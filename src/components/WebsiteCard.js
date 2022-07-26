import { deleteWebsite } from "../firebase/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import './guard.css';

export function WebsiteCard({ link }) {
  const navigate = useNavigate();

  const onDeleteLink = async (id) => {
    if (window.confirm("are you sure you want to delete this link?")) {
      await deleteWebsite(id);
      toast("Link Removed Successfully", {
        type: "error",
        autoClose: 2000,
      });
    }
  };

  return (
    <div
      className="card mb-3 card-website" 

        
          

>



      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h4>{link.name}</h4>
          <button
            className="btn btn-danger btn-sm d-flex align-items-center"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteLink(link.id);
            }}
          >
             🗑 Delete
          </button>

          <button class="btn btn-secondary btn-edit" 
          key={link.id}
          onClick={() => navigate(`/edit/${link.id}`)}
      
          >
        🖉 Edit
        </button>







        </div>
      
        <p>{link.description}</p>
        
        <div className="clic">
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          - Imagen - "Clic aqui"
        </a>
        </div>
      </div>
    </div>
  );
}
