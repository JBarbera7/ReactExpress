import { Image } from "react-bootstrap";
import React from "react";


const Alquiler = () => {
return (
    <>
        
    <div class="container" id="Taller">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
                <div class="card shadow-sm">
                    <img   src="https://www.sanferbike.com/videostv/wp-content/uploads/2020/10/Orbea-LAUFEY-H30-2021-600x400-1.jpg"/>
                    <div class="card-body">
                        <h5 class="card-title">ALQUILA BICICLETA DE MONTAÑA</h5>
                        <p class="card-text">3€ por hora</p>
                        <p class="card-text">12€ por día</p>
                        
                    </div>
                </div>
            </div>

            <div class="col">
              <div class="card shadow-sm">
                  <img   src="https://www.biciclasica.com/41020/bicicleta-de-paseo-capri-gracia-verde-pastel-1v-b-stock.jpg"/>
                  <div class="card-body">
                      <h5 class="card-title">ALQUILA BICICLETA DE PASEO</h5>
                      <p class="card-text">3€ por hora</p>
                      <p class="card-text">12€ por día</p>
                      
                  </div>
              </div>
          </div>

          <div class="col">
            <div class="card shadow-sm">
                <img  src="https://taobike.es/wp-content/uploads/2015/07/silla-ni%C3%B1o-taobike.jpg"/>
                <div class="card-body">
                    <h5 class="card-title">ALQUILA BICICLETA PARA NIÑOS </h5>
                    <p class="card-text">3€ por hora</p>
                    <p class="card-text">12€ por día</p>
                    
                </div>
            </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
              <img id="imgAlquiler" width="67%" src="https://tienda.motorverde.es/src/uploads/2022/03/Bicicleta-electrica-Focus-Thron%C2%B2-6.8-negro.jpg"/>
              <div class="card-body">
                  <h5 class="card-title">ALQUILA BICICLETA ELECTRICA</h5>
                  <p class="card-text">3€ por hora</p>
                  <p class="card-text">12€ por día</p>
                 
              </div>
          </div>
      </div>

      <div class="col">
        <div class="card shadow-sm">
            <img src="https://cyclobikesvalencia.com/wp-content/uploads/2022/04/WEB2.jpg"/>
            <div class="card-body">
                <h5 class="card-title">ALQUILA CICLOS 4 PERSONAS</h5>
                <p class="card-text">3€ por hora</p>
                <p class="card-text">12€ por día</p>
                
            </div>
        </div>
    </div>

    <div class="col">
      <div class="card shadow-sm">
          <img src="https://bicigrino.com/wp-content/uploads/2021/01/massi_tandem.jpg"/>
          <div class="card-body">
              <h5 class="card-title">ALQUILA BICICLETA TANDEM</h5>
              <p class="card-text">3€ por hora</p>
              <p class="card-text">12€ por día</p>
              
          </div>
      </div>
  </div>
        </div>
    </div>


</>
    );
}

export default Alquiler;
