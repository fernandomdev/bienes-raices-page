import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter innerWidth">

        <img src="./logo.png" alt="logo" width={100} />

        <div className="h-menu flexCenter">
          <a href="">Residencias</a>
          <a href="">Nuestro Valor</a>
          <a href="">Contáctanos</a>
          <a href="">Empieza</a>
          <button className="button">Contacto</button>
        </div>

      </div>
    </section>
  )
}

export default Header