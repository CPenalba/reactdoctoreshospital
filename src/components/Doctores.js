import React, { Component } from "react";
import axios from "axios";
import Global from "./Global";
import DetallesDoctor from "./DetallesDoctor";
export default class Doctores extends Component {
  state = {
    doctores: [],
    idDoctor: -1,
  };
  loadDoctores = () => {
    var idHospital = this.props.idhospital;
    var request = "api/doctores/doctoreshospital/" + idHospital;
    var url = Global.apiDoctores + request;
    axios.get(url).then((response) => {
      console.log("Leyendo servicio doctores");
      this.setState({
        doctores: response.data,
        idDoctor: -1,
      });
    });
  };
  componentDidMount = () => {
    this.loadDoctores();
  };
  componentDidUpdate = (oldProps) => {
    //NUNCA LLAMAREMOS A NADA SI NO TENEMOS AQUI UN IF
    if (this.props.idhospital != oldProps.idhospital) {
      this.loadDoctores();
    }
  };
  mostrarDetalleDoctor = (idDoctor) => {
    this.setState({
      idDoctor: idDoctor,
    });
  };
  render() {
    return (
      <div>
        <h2>
          Doctores del hospital:
          <span style={{ color: "red" }}>{this.props.idhospital}</span>
        </h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Detalles</th>
            </tr>
          </thead>
          <tbody>
            {this.state.doctores.map((doc, index) => {
              return (
                <tr key={index}>
                  <td>{doc.apellido}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.mostrarDetalleDoctor(doc.idDoctor);
                      }}
                    >
                      Detalles
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {this.state.idDoctor != -1 && (
          <DetallesDoctor iddoctor={this.state.idDoctor} />
        )}
      </div>
    );
  }
}
