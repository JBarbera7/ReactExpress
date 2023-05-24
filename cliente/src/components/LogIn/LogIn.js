import { Container, Navbar, Nav } from "react-bootstrap";
import { TiUserOutline } from "react-icons/ti";
import { NavLink  } from "react-router-dom";

  import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";



const LogIn= () => {
  const [name, setName] = useState();

  const navigate = useHistory();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get(`http://localhost:4000/user`, {
          headers: {
            token: token,
          },
        })
        .then(({ data }) => setName(data.nombre))
        .catch((error) => console.error(error));
    }
  }, [token]);



  

  return (

    <Nav>
    
    <div> 
    <TiUserOutline />: {name}
    

    </div> 
   
    
  </Nav>



  
   
  );
  
};




  
  

    


export default LogIn; 