import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="innerWidth flexCenter hero-container">

        {/* left side */}
        <div className="hero-left">

          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>Descubre<br/>Muchas<br/>Propiedades<br/>Económicas</h1>
          </div>

          <div className="hero-description">
            <span>Una variedad de propiedades para sus necesidades</span>
            <span>Sin dificultades para encontrar una residencia</span>
          </div>

          <div className="search-bar flexCenter">
            <HiLocationMarker color="#4066ff" size={40}/>
            <input type="text" placeholder="Busque lo que desee..."/>
            <button className="button">Buscar</button>
          </div>

          <div className="flexCenter stats">
            <div className="stat">
              <div>
                <CountUp start={8800} end={9000} duration={4}/>
                <span>+</span>
              </div>
              <span>Dptos. Vendidos</span>
            </div>
            <div className="stat">
              <div>
                <CountUp start={1400} end={2100} duration={4}/>
                <span>+</span>
              </div>
              <span>Clientes Felices</span>
            </div>
            <div className="stat">
              <div>
                <CountUp end={28} duration={4}/>
                <span>+</span>
              </div>
              <span>Casas Vendidas</span>
            </div>
          </div>

        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero.png" alt="hero-image" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
