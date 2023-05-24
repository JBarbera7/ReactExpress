import { useEffect, useState } from "react";
import { Container, Row, Col, Carousel, Card , CardGroup, CardImg, Button } from "react-bootstrap";
import { collection, addDoc, getDocs } from "firebase/firestore";
import mydb from "../firebase/firebaseConfig";

const Taller = () => {
  const [laptops, setLaptops] = useState([]);

  const obtenerDatos = async () => {
    const datos = await getDocs(collection(mydb, "bicis"));

    datos.map(doc => console.log(doc))
  
   
  };



  useEffect(() => {
    console.log("use effect")
    
    obtenerDatos();
  }, []);

  return (
    <>
    

      
      <Container class="container mt-5" style={{marginTop: 10}}>
        <Container class="row justify-content-center">
            <Container class="col-12 col-md-8" style={{color:"black", marginTop:"50px"} }>
                <h1>Nuestros Taller
                </h1>

                <p>En BicisVal, ofrecemos servicios de alta calidad para el mantenimiento y reparación de bicicletas. Nuestro equipo de expertos en mecánica se encarga de realizar ajustes, reparaciones y reemplazos de componentes utilizando herramientas y técnicas avanzadas. Brindamos un servicio personalizado para todo tipo de bicicletas, junto con asesoramiento experto y atención al cliente excepcional. Tu satisfacción y seguridad son nuestra prioridad. Ven y descubre cómo podemos cuidar de tu bicicleta en BicisVal.</p>
               
                </Container>
            </Container>
        </Container>

        <CardGroup style={{margin: 100}}>
      <Card>
        <Card.Img variant="top" src="https://c8.alamy.com/compes/2arb5d0/diseno-atractivo-y-soporte-de-llamadas-totalmente-editable-pongase-en-contacto-con-nosotros-icono-de-correo-electronico-para-comerciales-medios-impresos-web-o-cualquier-tipo-de-proyecto-de-diseno-2arb5d0.jpg" />
        <Card.Body>
        <Card.Title>Pedir Cita</Card.Title>
        <Card.Footer>
      
             
        <Button href="https://mail.google.com/" variant="secondary">bicisval@gmail.com</Button>
        </Card.Footer>
        
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0aKLx0-k8ihzk8ucim3tLOkfZE-jFXqKJag&usqp=CAU" />
        <Card.Body>
          <Card.Text> LLama al  963 654 123 </Card.Text>
          
        </Card.Body>
       
      </Card>
     
    </CardGroup>
      

     
     
    </>
  );
};

export default Taller;
