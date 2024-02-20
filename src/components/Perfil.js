import React from 'react';
import '../styles/perfil.css';
import Contador from './Contador';


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
        <div>
          <div className='botones'>
            {/*botones redes sociales */}
            <div className='youtube' onClick={() => window.open(props.youtube, '_blank')}>
              <Contador onClick={() => window.open(props.youtube, '_blank')}>
                <img className='logo' 
                src={require(`../images/youtube.png`)}
                alt='log'/>
              </Contador>  
            </div>
            <div className='linkedin' onClick={() => window.open(props.linkedin, '_blank')}>
              <Contador onClick={() => window.open(props.linkedin, '_blank')}>
                <img className='logo' 
                src={require(`../images/linkedin.png`)}
                alt='log'/> 
              </Contador>    
            </div>
            <div className='twitter' onClick={() => window.open(props.twitter, '_blank')}>
              <Contador onClick={() => window.open(props.twitter, '_blank')}>
                <img className='logo' 
                src={require(`../images/twitter.png`)}
                alt='log'/>
              </Contador>  
            </div>
          </div>
        </div>

      </div>
    </div>
    )
};

export default Perfil;