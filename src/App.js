import './App.css';
import Perfil from './components/Perfil.js';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Mis programadores favoritos de YouTube</h1>
      <div className='contenedor-principal'>
        <Perfil
        nombre='Brais Moure'
        pais='España'
        imagen='perfil-brais'
        cargo='Ing. Software'
        empresa='Fundador de MoureDev'
        descripcion='Es un desarrollador que comparte recursos en YouTube y tiene un curso increíble de Python'
        />

        <Perfil
        nombre='Facundo'
        pais='Argentina'
        imagen='perfil-facundo'
        cargo='Programador'
        empresa='Tecnología y programación'
        descripcion='Tecnología y programación Python'
        />

        <Perfil
        nombre='Miguel Durán'
        pais='España'
        imagen='perfil-midudev'
        cargo='Desarrollo con JS '
        empresa='MiduDev'
        descripcion='Tecnología y programación PythonDESARROLLO con JAVASCRIPT. Programación web y FULL STACK con React, Node.js, HTML, CSS, Tailwind, Next.js y Deno.'
        />
      </div>
     
    </div>
  );
}

export default App;
