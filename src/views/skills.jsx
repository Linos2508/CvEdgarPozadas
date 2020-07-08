import React, { Component } from "react";
import "./skills.css";
import {  } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons"
import {  } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navegacion from "../components/navigation.jsx";

class Skills extends Component {
    constructor() {
        super();
        this.state = {
            lenguajes:[
                {lenguaje:"JavaScript",nivel:"Avanzado",barra:3},
                {lenguaje:"HTML5",nivel:"Avanzado",barra:3},
                {lenguaje:"CSS",nivel:"Avanzado",barra:3},
                {lenguaje:"Bootstrap",nivel:"Avanzado",barra:3},
                {lenguaje:"jQuery",nivel:"Avanzado",barra:3},
                {lenguaje:"AngularJs",nivel:"Intermedio",barra:2},
                {lenguaje:"ReactJs",nivel:"Intermedio",barra:2},
                {lenguaje:"ES6+",nivel:"Intermedio",barra:2},
                {lenguaje:"TypeScript",nivel:"Intermedio",barra:2},
                {lenguaje:"SASS",nivel:"Basico",barra:1},
                {lenguaje:"PHP",nivel:"Avanzado",barra:3},
                {lenguaje:"Flask",nivel:"Avanzado",barra:3},
                {lenguaje:"MySQL",nivel:"Avanzado",barra:3},
                {lenguaje:"Python",nivel:"Intermedio",barra:2},
            ],
            herramientas:[
                {herramienta:"Filezilla",nivel:"Avanzado",barra:3},
                {herramienta:"Postman",nivel:"Avanzado",barra:3},
                {herramienta:"Git",nivel:"Intermedio",barra:2},
                {herramienta:"Linux",nivel:"Intermedio",barra:2},
                {herramienta:"Nginx",nivel:"Intermedio",barra:2},
            ]
        }
    }
    componentDidMount() {
    }
    renderLenguajes = () => {
        let opciones = [];
        let lenguajes = this.state.lenguajes;
        for(let i=0; i< lenguajes.length; i++){
            opciones.push(
                <div className="habilidad">
                    <div className="lenguaje">{lenguajes[i].lenguaje}</div>
                    <div className="nivel">{lenguajes[i].nivel}</div>
                    <div className="barras">
                        {this.renderBarras(lenguajes[i].barra)}
                    </div>
                </div>
            )
        }
        return opciones;
    }
    renderHerramientas = () => {
        let opciones = [];
        let herramientas = this.state.herramientas;
        for(let i=0; i< herramientas.length; i++){
            opciones.push(
                <div className="habilidad">
                    <div className="lenguaje">{herramientas[i].herramienta}</div>
                    <div className="nivel">{herramientas[i].nivel}</div>
                    <div className="barras">
                        {this.renderBarras(herramientas[i].barra)}
                    </div>
                </div>
            )
        }
        return opciones;
    }
    renderBarras = (nivel) => {
        let barras = [];
        for(let i=0; i<nivel; i++){
            barras.push(
                <span className="barraActiva"><FontAwesomeIcon icon={faCheckCircle}/></span>
            )
        }
        for(nivel; nivel<3; nivel++){
            barras.push(
                <span className="barraInactiva"></span>
            )
        }
        return barras;
    }

    render () { 
        return(
            <>
                <Navegacion></Navegacion>
                <section className="habilidades">
                    <div className="contenedorHabilidades">
                        <div className="habilidadesTecnicas">
                            <h3>Lenguajes</h3>
                            {this.renderLenguajes()}
                        </div>
                        <div className="habilidadesTecnicas">
                            <h3>Herramientas</h3>
                            {this.renderHerramientas()}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Skills;