import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import MenuHospitales from "./MenuHospitales";
import Home from "./Home";
import Doctores from "./Doctores";
import CreateHospital from "./CreateHospital";

export default class Router extends Component {
  render() {
    function DoctoresElement() {
      var { idhospital } = useParams();
      return <Doctores idhospital={idhospital} />;
    }

    return (
      <BrowserRouter>
        <MenuHospitales />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctores/:idhospital" element={<DoctoresElement />} />
          <Route path="/create" element={<CreateHospital />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
