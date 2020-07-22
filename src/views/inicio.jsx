import React, { Component } from "react";
import "./inicio.css";
import Imagen from "../assets/Profile_Image.jpg";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navegacion from "../components/navigation.jsx";
import Video from "../assets/video.mp4";

class Home extends Component {
    state = {
        //boot: getBoot()[getCookie("Orolang")],
    };
    componentDidMount() {
    }
    render () { 
        return(
            <>
                <Navegacion></Navegacion>
                <section className="presentacion">
                    <video className="backgroundVideo" autoPlay={true} muted={true} loop>
                        <source src={Video} type="video/mp4"/>
                    </video>
                    <div className="contenedorPrincipal">
                        <div className="informacion">
                            <button>Hola yo soy</button>
                            <h1>Edgar Pozadas</h1>
                            <h3>Desarrollador Full-Stack</h3>
                            <p><FontAwesomeIcon icon={faEnvelope}/> <a href="mailto:epm_1998_eti@hotmail.com">epm_1998_eti@hotmail.com</a></p>
                            <p><FontAwesomeIcon icon={faPhone}/><a href="tel:5572037160"> 55-7203-7160</a></p>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt}/><a href="https://goo.gl/maps/m1i1fpCgeyuvzzBN8"> Jaramangos 590, Villa de las flores, Coacalco, Estado de México</a>   </p>
                            <div className="socialMedia">
                                <a href="https://www.facebook.com/edgar.pozadas/"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="https://github.com/Linos2508"><FontAwesomeIcon icon={faGithub} /></a>
                            </div>
                        </div>
                        <div className="imagen">
                            <img src={Imagen} alt="yo"/>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Home;