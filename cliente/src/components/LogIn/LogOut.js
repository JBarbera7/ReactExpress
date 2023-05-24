import { TiUserOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

  import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";



const LogOut= () => {

  const navigate2 = useHistory();

    const token = localStorage.getItem("token");
    function delteUserToken(){
  
   
    

  

  localStorage.removeItem("token");

  navigate2.push("/")
  navigate2.go()

  

}


  return (

    <Nav to="/" >
    
  
    <button className="btn btn-danger" id="LogOut" onClick={delteUserToken}>LogOut</button>

    
   
    
  </Nav>



  
   
  );
  }


export default LogOut;