import React from 'react';
import '../styles/perfil.css';

function Perfil(props){
  return(
    <div className='contenedor'>
      <div className='contenedor-perfil'>
        <img className='imagen-perfil'
        src={require(`../images/${props.imagen}.png`)}
        alt='Foto brais'/>

        <div className='contenedor-txt-perfil'>
          <p className='pais-perfil'>
            {props.nombre} en {props.pais}
          </p>
          <p className='cargo-perfil'>
            {props.cargo} en {props.empresa}
          </p>
          <p className='descripcion-perfil'>
            {props.descripcion}
          </p>
        </div>

      </div>
    </div>
    )
};

export default Perfil;