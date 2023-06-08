import React from "react";
import "./Contador.css"

class Contador extends React.Component {
  render() {
    return (
      <div className="contador">
        {this.props.numClicks}
      </div>
    );
  }
}

export default Contador;