import React from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio-component/Testimonio';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className='contenedor-principal'>
          <h1>Esto es lo que dicen nuestros alumnos</h1>
          <Testimonio
            nombre="Hector Leon"
            pais="México"
            imagen=""
            cargo="Desarrollador Front End"
            empresa="Radial Llantas"
            testimonio="Ya tengo hambre y falta 1 hora para irme a tragar. Me sale espuma del ocico." />
          <Testimonio
            nombre="Rosa Celeste"
            pais="México"
            imagen=""
            cargo="Vende Vídrio Molido"
            empresa="su casa."
            testimonio="Hoy no fía mañana sí." />
        </div>
      </div>
    );
  }
}

export default App;
