import { useEffect, useState } from "react";
import { Container, Row, Col, Carousel, Card , CardGroup, CardImg, Button } from "react-bootstrap";
import { collection, addDoc, getDocs } from "firebase/firestore";
import mydb from "../firebase/firebaseConfig";

const HomeContent = () => {
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
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/banner1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/banner2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/banner3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      
      <Container class="container mt-5" style={{marginTop: 10}}>
        <Container class="row justify-content-center">
            <Container class="col-12 col-md-8" style={{color:"black"}}>
                <h1>Nuestros servicios
                </h1>
                <ul class="list-group">
                    <li class="list-group-item">Reparaciónes</li>
                    <li class="list-group-item">Venta con precios competentes</li>
                    <li class="list-group-item">Alquiler de bicis</li>
                </ul>
                </Container>
            </Container>
        </Container>

        <CardGroup style={{margin: 100}}>
      <Card>
        <Card.Img variant="top" src="https://lacicleria.com/wp-content/uploads/2020/07/Bicis-alquiler.jpeg" />
        <Card.Body>
          <Card.Title>Alquiler</Card.Title>
          <Card.Text>
           Nuestro apartado de alquiler con numerosas opciones de todo tipo para 1, 2 , 3 y hasta 4 personas con precios muy competentes.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button href="/alquiler" variant="secondary">Alquiler</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.vibike.com/img/cms/taller-bicicletas.jpg" />
        <Card.Body>
          <Card.Title>Taller</Card.Title>
          <Card.Text>
            Nuestro taller especializado en competición con mas de 10 años de experiencia en el sector , con los mejores mecanicos y nuestra garantia de calidad , para mas información y pedir cita visite el apartado de taller.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button href="/taller" variant="secondary">Taller</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.sanferbike.com/videostv/wp-content/uploads/2019/11/foto-pozuelo-interior-3.jpg" />
        <Card.Body>
          <Card.Title>Venta</Card.Title>
          <Card.Text>
           Nuestra tienda online con los mejores productos y precios del mercado con las ultimas novedades y los mejores precios del mercado visite el apartado de tienda .
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button href="/tienda" variant="secondary">Tienda</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
      

     
     
    </>
  );
};

export default HomeContent;
