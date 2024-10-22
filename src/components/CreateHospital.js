import React, { Component } from "react";
import axios from "axios";
import Global from "./Global";

export default class CreateHospital extends Component {
  cajaId = React.createRef();
  cajaNombre = React.createRef();
  cajaDireccion = React.createRef();
  cajaTelefono = React.createRef();
  cajaCamas = React.createRef();

  state = {
    mensaje: "",
  };

  insertHospital = (e) => {
    e.preventDefault();
    let request = "webresources/hospitales/post";
    let url = Global.apiHospitales + request;
    //debemos respetar los tipos de dato del servicio
    let id = parseInt(this.cajaId.current.value);
    let nombre = this.cajaNombre.current.value;
    let direccion = this.cajaDireccion.current.value;
    let telefono = this.cajaTelefono.current.value;
    let camas = parseInt(this.cajaCamas.current.value);
    //necesitamos un objeto react con el mismo nombre de propiedades que el servicio
    let hospital = {
      idhospital: id,
      nombre: nombre,
      direccion: direccion,
      telefono: telefono,
      camas: camas,
    };
    axios.post(url, hospital).then((response) => {
      this.setState({
        mensaje: "Hospital insertado correctamente" + nombre,
      });
    });
  };

  render() {
    return (
      <div>
        <h1>New hospital</h1>
        <h3 style={{ color: "blue" }}>{this.state.mensaje}</h3>
        <form>
          <label>Id hospital: </label>
          <input type="text" ref={this.cajaId} className="form-control" />
          <label>Nombre hospital: </label>
          <input type="text" ref={this.cajaNombre} className="form-control" />
          <label>Direccion hospital: </label>
          <input
            type="text"
            ref={this.cajaDireccion}
            className="form-control"
          />
          <label>Telefono hospital: </label>
          <input type="text" ref={this.cajaTelefono} className="form-control" />
          <label>Camas hospital: </label>
          <input type="text" ref={this.cajaCamas} className="form-control" />
          <button onClick={this.insertHospital} className="btn btn-warning">
            Insert
          </button>
        </form>
      </div>
    );
  }
}
