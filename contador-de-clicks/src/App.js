import React from "react";
import './App.css';
import logo from "./imagenes/react-logo.png"
import Boton from "./components/Boton-Component/Boton"
import Contador from './components/Contador-component/Contador';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClicks: 0
    };

    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClick() {
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 }));
  };

  reiniciarContador() {
    this.setState({ numClicks: 0 })
  }

  render() {
    return (
      <div className="App">
        <div className='freecodecamp-logo-contenedor'>
          <img className='freecodecamp-logo'
            src={logo}
            alt="Logo de freecodecamp" />
        </div>
        <div className='contenedor-principal'>
          <Contador numClicks={this.state.numClicks} />
          <Boton texto="Sumar"
            esBotonDeClick={true}
            manejarClick={this.manejarClick} />
          <Boton
            texto="Reiniciar" esBotonDeClick={false}
            manejarClick={this.reiniciarContador}
          />
        </div>
      </div>
    );
  }
}

export default App;
