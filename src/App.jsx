import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Inicio from "./views/inicio.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Inicio} />
      </BrowserRouter>
    );
  }
}

export default App;
