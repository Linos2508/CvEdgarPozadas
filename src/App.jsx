import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Inicio from "./views/inicio.jsx";
import Sobre from "./views/sobre.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Inicio} />
        <Route path="/sobre" exact component={Sobre} />
      </BrowserRouter>
    );
  }
}

export default App;
