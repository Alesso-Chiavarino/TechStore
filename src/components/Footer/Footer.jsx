import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='bg-dark'>
        <div className="row container-fluid p-5 pb-1 text-white">
          <div className="col-xs-12 col-md-6 col-lg-3 padre-empresa-footer">
            {/* <a className="navbar-brand empresa-footer" href="#"><img className="icono" src="../img/icono.png" alt="" />TecnoHouse</a> */}
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className="h5 mb-3">Sobre Nosotros</p>
            <div className="mb-3">
              <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorem repudianda.</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className="h5 mb-3">Contacto</p>
            <div className="mb-1">
              <a href="html/contacto.html" className="text-secondary text-decoration-none footer_hover">Quiero Preguntar</a>
            </div>
            <div className="mb-1">
              <a href="tel:3513079987" className="text-secondary text-decoration-none footer_hover">3513079987</a>
            </div>
            <div className="mb-1">
              <p className="text-secondary mb-0">Av.Rafael Nuñez 1912, Córdoba, Argentina.</p>
            </div>
            <div className="mb-1">
              <p className="text-secondary mb-0">Lunes a Viernes de 9:00 a 18:00. Sábados de 9:00 a 13:00</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3 padre_redes">
            <p className="h5 mb-3">Redes Sociales</p>
            <div className="mb-3">
              <p className="text-white">Seguinos en nuestras redes sociales!</p>
              {/* <section className="redes-sociales">
                <div className="contenedor-redes">
                  <a className="twitter" href="https://twitter.com/Cristiano" target="_blank"><i
                    className="fa-brands fa-twitter"></i></a>
                  <a className="facebook" href="https://www.facebook.com/rosana.baudracco"
                    target="_blank"><i className="fa fa-facebook"></i></a>
                  <a className="instagram" href="https://www.instagram.com/baudraccorosana/"
                    target="_blank"><i className="fa fa-instagram"></i></a>
                  <a className="whatsapp" href="https://wa.me/543515524405" target="_blank"><i
                    className="fa-brands fa-whatsapp"></i></a>
                </div>
              </section> */}
            </div>
          </div>
          <div className="col-xs-12 pt-4">
            <hr />
            <p className="text-white text-center">© 2022 Alessandro Chiavarino - Todos los Derechos Resevados</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;