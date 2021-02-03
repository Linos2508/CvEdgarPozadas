import React, { Component } from "react";
import "./inicio.css";
import Imagen from "../assets/Profile_Image.jpg";
import { faEnvelope, faPhone, faMapMarkerAlt, faDatabase, faDownload } from "@fortawesome/free-solid-svg-icons";
import { 
    faFacebook,
    faGithub, 
    faLinkedin,
    faJs,
    faPhp,
    faHtml5,
    faCss3,
    faSass,
    faReact,
    faAngular,
    faPython, 
    faUbuntu,
    faLinux,
    faBootstrap} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PDF from "../assets/cv_edgar.pdf"

class Home extends Component {
    state = {};
    componentDidMount() {}
    render () { 
        return(
            <>
                <section className="presentacion">
                    <div className="contenedorPrincipal">
                        <div className="informacion">
                            <div className="imagen">
                                <img src={Imagen} alt="yo"/>
                            </div>
                            <h1>Edgar Pozadas</h1>
                            <h3>Desarrollador Full-Stack</h3>
                            <p><FontAwesomeIcon icon={faEnvelope}/> <a href="mailto:epm_1998_eti@hotmail.com">epm_1998_eti@hotmail.com</a></p>
                            <p><FontAwesomeIcon icon={faPhone}/><a href="tel:5572037160"> 55-7203-7160</a></p>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt}/><a href="https://goo.gl/maps/m1i1fpCgeyuvzzBN8"> Jaramangos 590, Villa de las flores, Coacalco, Estado de México</a>   </p>
                            <div className="socialMedia">
                                <a href="https://www.facebook.com/edgar.pozadas/"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="https://github.com/Linos2508"><FontAwesomeIcon icon={faGithub} /></a>
                                <a href="https://www.linkedin.com/in/edgar-pozadas-5261b4187/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href={PDF} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDownload} /></a>
                            </div>
                        </div>
                        <div className="masInfo">
                            <div className="objetivos">
                                <h2> Objetivo Profesional</h2>
                                <p>
                                    Encontrar una empresa de TI donde pueda seguir desarrollando mis habilidades y aptitudes.
                                    Adicto al código, Amante de Python
                                </p>
                            </div>
                            <div className="skillsTecnicos">
                                <h2>Skills Técnicos</h2>
                                <div className="lenguajes">
                                    <FontAwesomeIcon icon={faPython} title="Python3"/>
                                    <FontAwesomeIcon icon={faPhp} title="PHP" />
                                    <FontAwesomeIcon icon={faDatabase} title="Databases" />
                                    <FontAwesomeIcon icon={faUbuntu} title="Ubuntu" />
                                    <FontAwesomeIcon icon={faLinux} title="Linux" />
                                    <FontAwesomeIcon icon={faJs} title="JavaScript" />
                                    <FontAwesomeIcon icon={faReact} title="ReactJs" />
                                    <FontAwesomeIcon icon={faAngular} title="Angular" />
                                    <FontAwesomeIcon icon={faHtml5} title="HTML5" />
                                    <FontAwesomeIcon icon={faCss3} title="CSS" />
                                    <FontAwesomeIcon icon={faBootstrap} title="Bootstrap" />
                                    <FontAwesomeIcon icon={faSass} title="SASS (CSS with superpowers)" />
                                </div>
                            </div>
                            <div className="experienciaLaboral">
                                <h2>Experiencia Laboral</h2>
                                <ul>
                                    <li>Web Full-Stack Developer y Líder Tecnico en Platimex Enero 2020 – Actualidad.</li>
                                    <li>Web Full-Stack Developer en Crown Clever Company Enero 2019 – Diciembre 2019.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Home;