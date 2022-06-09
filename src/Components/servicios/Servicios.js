import React from 'react'
import '../servicios/Servicios.css';
import dato from '../../assets/datos.svg';

const Servicios = () => {
  return (
    
    <div className="servicios-container">
      <div className="servicio-desc">
          <h1>Mi Servicios</h1>
          <div className="icono-datos">
            <img src={dato} className="icon-dato" alt="logo" />
          </div>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
      </div>  
    </div>
  )
}

export default Servicios;