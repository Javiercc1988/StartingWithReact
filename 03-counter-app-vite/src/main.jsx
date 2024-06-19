// IMPORTAR REACT
import React from "react";
// IMPORTAR ALGO PARA RENDERIZARLO (DOM)
import ReactDOM from "react-dom/client";
import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp, Interpolation } from "./FirstApp";
import { ComunicacionComponents } from "./ComunicacionComponentes";
import { EjemploPropTypes } from "./EjemploPropTypes";
import { CounterAppMejorado } from "./CounterAppMejorado";

// Importar estilos globales
import "./styles.css";
import { CounterApp } from "./CounterApp";

// RENDERIZADO
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HelloWorldApp /> */}
    {/* <FirstApp /> */}
    {/* <Interpolation /> */}
    {/* <ComunicacionComponents
      title="Hola!"
      name="Prueba de props!"
      suma={15 + 15}
    /> */}

    {/* <EjemploPropTypes/> */}

    {/* <CounterApp value={135} /> */}
    <CounterAppMejorado valorInicial={10}/>
  </React.StrictMode>
);
