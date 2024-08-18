import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
        <div className="innerWidth">
            {/* left side */}
            <div className="f-left">
                <img src="./logo2.png" alt="logo" />
                <p>Our vision is to make all people<br/>
                the best place to live for them.</p>
            </div>
            {/* right side */}
            <div className="f-right">
                <div className="title">
                    <h4>Información</h4>
                    <p>145 New York, FL 5467, USA</p>
                </div>
                <div className="f-links">
                    <span>Propiedades</span>
                    <span>Servicio</span>
                    <span>Productos</span>
                    <span>Acerca de</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer