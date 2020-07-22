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
import {faDatabase, faServer, faDownload, faLaptop, faCode,faUsers, faBrain, faMagic, faBookReader, faHandshake } from "@fortawesome/free-solid-svg-icons";
import {faObjectUngroup} from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navegacion from "../components/navigation.jsx";
import PDF from "../assets/CV Edgar Pozadas Muñoz.pdf"
import Typewriter from 'typewriter-effect';

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
                <section className="sobreMi">
                    <div className="contenedorSobre">
                        <div className="imagenSobre">
                            <img src={Imagen} alt="imagenSobre"/>
                        </div>
                        <div className="informacionSobre">
                            <h2>Sobre mí</h2>
                            <p>Hola, soy Edgar, programador Full-stack, vivo en Coacalco Estado de México, tengo amplia experiencia
                                en lenguajes de programación enfocados en web, cuento con 2 años de experiencia.
                            </p>
                            <div className="etiquetas">
                                <div>
                                    <FontAwesomeIcon icon={faJs} title="JavaScript" />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faReact} title="ReactJs" />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faAngular} title="Angular" />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faHtml5} title="HTML5" />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faCss3} title="CSS" />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faSass} title="SASS (CSS with superpowers)" />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faPython} title="Python3"/>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faPhp} title="PHP" />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faDatabase} title="Databases" />
                                </div>
                                <div>
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
                                UX/UI con tecnologías de front-end como son HTML5, CSS, JavaScript y/o algunos de sus frameworks
                            </p>
                        </div>
                        <div className="tarjeta">
                            <FontAwesomeIcon icon={faCode}/>
                            <h3>Desarrollo Back-end</h3>
                            <p>
                                Dentro de mis habilidades técnicas se encuentran diferentes lenguajes de programación, como PHP, Java y Python3
                                útiles para crear APIs, servicios web, así como conexiones con bases de datos
                            </p>
                        </div>
                        <div className="tarjeta">
                            <FontAwesomeIcon icon={faObjectUngroup}/>
                            <h3>Configuración de APIs</h3>
                            <p>
                                La creación de procesos internos en un servidor es muy importante a la hora de crear un API,
                                para ello he utilizado tecnologías como son Nginx, Flask, Gunicorn y servicios desarrollados 
                                para Ubuntu
                            </p>
                        </div>
                    </div>
                </section>
                <section className="habilidades">
                    <div className="contenedorHabilidadesProfesionales">
                        <h2><Typewriter
                                options={{
                                    strings: 'Habilidades Profesionales',
                                    autoStart: true,
                                    loop: false,
                                }}
                                /></h2>
                        <div className="habilidadesProfesionales">
                            <div className="tarjeta">
                                <FontAwesomeIcon icon={faUsers}/>
                                <h5>Trabajo en equipo</h5>
                            </div>
                            <div className="tarjeta">
                                <FontAwesomeIcon icon={faBookReader}/>
                                <h5>Proactivo</h5>
                            </div>
                            <div className="tarjeta">
                                <FontAwesomeIcon icon={faMagic}/>
                                <h5>Creatividad</h5>
                            </div>
                            <div className="tarjeta">
                                <FontAwesomeIcon icon={faBrain}/>
                                <h5>Pensamiento Lógico</h5>
                            </div>
                            <div className="tarjeta">
                                <FontAwesomeIcon icon={faHandshake}/>
                                <h5>Tolerancia</h5>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default About;