import React, { useState } from "react";
import "./Formulario.css";
import { v4 as tareaId } from "uuid"

function Formulario(props) {

  const [input, setInput] = useState();

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva = {
      id: tareaId(),
      texto: input,
      completada: false
    }

    props.onSubmit(tareaNueva);
  }

  return (
    <form
      className="tarea-formulario"
      onSubmit={manejarEnvio}
    >
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea nueva"
        name="texto"
        onChange={manejarCambio}
      />
      <button

        className="tarea-boton">Agregar Tarea</button>
    </form>
  )
}

export default Formulario;