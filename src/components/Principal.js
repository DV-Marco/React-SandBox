import React, { Component } from "react";
import ReactDOM from "react-dom";
import Datos from "./Datos";
import data from "./../assets/data.json";
import { GridList, Button } from "@material-ui/core";
import "./../styles/personas.css";

const Notes = ({ title, content }) => {
  return (
    <GridList>
      <Datos title={title} className="persona" content={content} />
    </GridList>
  );
};

export class Personas extends Component {
  state = {
    name: "Marcos",
    nombre: "",
    dataS: data
  };

  change = () => {
    this.setState({
      nombre: this.nombreRef.current.value
    });
    console.log(this.state.nombre);
  };

  nombreRef = React.createRef();

  changeInput = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <div id="root">
        <h1>{this.state.nombre}</h1>
        <h1>{this.state.name}</h1>
        <input
          type="text"
          ref={this.nombreRef}
          onChange={this.changeInput}
          value={this.state.name}
        />
        <Button variant="contained" color="secondary" onClick={this.change}>
          Cambiar
        </Button>
        <GridList>
          {data.pagina.map((lenguajes) => (
            <Notes
              key={lenguajes.id}
              title={lenguajes.titulo}
              content={lenguajes.contenido}
            />
          ))}
        </GridList>
      </div>
    );
  }
}

export default Personas;
