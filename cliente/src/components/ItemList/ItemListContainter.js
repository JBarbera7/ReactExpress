import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { Container, Row, Col } from "react-bootstrap";

import TiendaData from "../data/tienda.json";





function ItemListContainter({ data }) {
  const [productList, setproductList] = useState(0);

  const [jsonData, setJsonData] = useState(0);

  useEffect(() => {
    setJsonData(data);

    const ackData = new Promise((resolve, reject) => {
      
      setTimeout(function () {
        switch (jsonData) {
          case "Tienda":
            resolve(TiendaData);
            break;

         

        
         
          default:
            break;
        }
      }, 500);
    });

    ackData.then((response) => {
      console.log(response);
      setproductList(response);
    });
  }, [jsonData, data]);

  return (
    <Container>
      <Row className="item-list-container">
        <Col md={3}>
          <h1>{jsonData}</h1>
          <hr />
        </Col>
        <Col md={9} className="d-flex justify-content-center">
          <Row>
            <ItemList items={productList} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemListContainter;
