import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-light text-center text-lg-start">
        <hr />
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-start">
              <h5 className="text-uppercase">Nosotros</h5>
              <p>
              En BicisVal, somos apasionados del ciclismo y nos dedicamos a brindar productos y servicios de calidad para satisfacer todas tus necesidades. Con un equipo de expertos en bicicletas y accesorios, estamos aquí para ayudarte a encontrar la bicicleta perfecta y proporcionarte un excelente servicio al cliente. Ya sea que busques aventuras en la montaña o paseos tranquilos por la ciudad, estamos comprometidos a hacer que tu experiencia en bicicleta sea inolvidable. ¡Únete a nosotros y descubre el mundo del ciclismo con BicisVal!
              </p>
            </div>

            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-end">
              <h5 className="text-uppercase">Contáctenos</h5>

              <address>
                <strong>BicisVal</strong>
                <br />
                Ctra. ESTACIÓ, S/N
                <br />
                Ontinyent, Valencia CP 46870
                <br />
                <abbr title="Phone">Teléfono:</abbr> 963 654 123
              </address>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "#222", color: "#fff" }}
        >
          © 2023 Copyright:
          <a className="text-dark" href="/">
            BicisVal
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
