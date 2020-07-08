import React, { Component } from "react";
import "./sobre.css";
import Imagen from "../assets/ab-img.png";
import 
{ 
    faJs,
    faPhp,
    faHtml5,
    faCss3,
    faSass,
    faReact,
    faAngular,
    faPython
 } from "@fortawesome/free-brands-svg-icons"
import {faDatabase, faServer, faDownload, faLaptop, faCode} from "@fortawesome/free-solid-svg-icons"
import {faObjectUngroup} from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navegacion from "../components/navigation.jsx";
import PDF from "../assets/CV Edgar Pozadas Muñoz.pdf"

class About extends Component {
    state = {
        //boot: getBoot()[getCookie("Orolang")],
    };
    componentDidMount() {
    }
    downloadCv = () => {
        window.open(PDF);
    }
    render () { 
        return(
            <>
                <Navegacion></Navegacion>
                <section className="aboutMe">
                    <div className="contenedorAbout">
                        <div className="imageAbout">
                            <img src={Imagen} alt="imageAbout"/>
                        </div>
                        <div className="informacionAbout">
                            <h2>Sobre mí</h2>
                            <p>Hola, soy Edgar, programador Full-stack, vivo en Coacalco Estado de México, tengo amplia experiencia
                                en Lenguajes de programación enfocados en Web, tengo 2 años de experiencia (y contando :D )
                            </p>
                            <div className="etiquetas">
                                <div className="blancas">
                                    <FontAwesomeIcon icon={faJs} title="JavaScript" />
                                </div>
                                <div className="azules">
                                    <FontAwesomeIcon icon={faReact} title="ReactJs" />
                                </div>
                                <div className="blancas">
                                    <FontAwesomeIcon icon={faAngular} title="Angular" />
                                </div>
                                <div className="azules">
                                    <FontAwesomeIcon icon={faHtml5} title="HTML5" />
                                </div>
                                <div className="blancas">
                                    <FontAwesomeIcon icon={faCss3} title="CSS" />
                                </div>
                                <div className="azules">
                                    <FontAwesomeIcon icon={faSass} title="SASS (CSS with superpowers)" />
                                </div>
                                <div className="blancas">
                                    <FontAwesomeIcon icon={faPython} title="Python3"/>
                                </div>
                                <div className="azules">
                                    <FontAwesomeIcon icon={faPhp} title="PHP" />
                                </div>
                                <div className="blancas">
                                    <FontAwesomeIcon icon={faDatabase} title="Databases" />
                                </div>
                                <div className="azules">
                                    <FontAwesomeIcon icon={faServer} title="Servidores" />
                                </div>
                            </div>
                            <button onClick={e=> this.downloadCv()}>Descargar Cv <FontAwesomeIcon icon = {faDownload} title="Download" /></button>
                        </div>
                    </div>
                </section>
                <section className="servicios">
                    <h2>Mis servicios</h2>
                    <div className="contenedorTarjetas">
                        <div className="tarjeta">
                            <FontAwesomeIcon icon={faLaptop}/>
                            <h3>Desarrollo Front-end</h3>
                            <p>
                                Tengo la capacidad y la experiencia para desarrollar sitios web basados en diseño
                                UX/UI con tecnologias de front-end como son HTML5,CSS,JavaScript y/o algunos de sus frameworks
                            </p>
                        </div>
                        <div className="tarjeta">
                            <FontAwesomeIcon icon={faCode}/>
                            <h3>Desarrollo Back-end</h3>
                            <p>
                                Tengo la capacidad y la experiencia para desarrollar sitios web basados en diseño
                                UX/UI con tecnologias de front-end como son HTML5,CSS,JavaScript y/o algunos de sus frameworks
                            </p>
                        </div>
                        <div className="tarjeta">
                            <FontAwesomeIcon icon={faObjectUngroup}/>
                            <h3>Configuración de APIs</h3>
                            <p>
                                Tengo la capacidad y la experiencia para desarrollar sitios web basados en diseño
                                UX/UI con tecnologias de front-end como son HTML5,CSS,JavaScript y/o algunos de sus frameworks
                            </p>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default About;