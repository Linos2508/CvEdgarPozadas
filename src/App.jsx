import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Inicio from "./views/inicio.jsx";
import getBoot from "./common/boot";

export default function App() {
  if (localStorage.getItem("lang") === null) {
    localStorage.setItem("lang", "en");
    window.location.reload();
  }
  const [boot, setBoot] = useState(getBoot()[localStorage.getItem("lang")]);
  function changeBoot(key) {
    setBoot(getBoot()[key]);
    localStorage.setItem("lang", key);
  }
  return (
    <BrowserRouter>
      <Route
        path="/"
        exact
        render={(props) => (
          <Inicio
            activeLang={localStorage.getItem("lang")}
            boot={boot}
            language={changeBoot}
            {...props}
          />
        )}
      />
    </BrowserRouter>
  );
}
