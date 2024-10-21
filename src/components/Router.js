import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import MenuHospitales from "./MenuHospitales";
import Home from "./Home";
import Doctores from "./Doctores";

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
        </Routes>
      </BrowserRouter>
    );
  }
}
