import React from "react"

class Boton extends React.Component {
  render() {
    return (
      <button
        className={this.props.esBotonDeClick ? "boton-click" : "boton-reiniciar"}
        onClick={this.props.manejarClick}
      >
        {this.props.texto}
      </button>
    );
  }
}

export default Boton;