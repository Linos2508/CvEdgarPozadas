import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

class Navegacion extends Component {
    constructor() {
        super();
        this.state = {
            //boot: getBoot()[getCookie("Orolang")],
        }
    }
    componentDidMount() {
        console.log(window.location.pathname);
        switch (window.location.pathname){
            case "/":
                document.getElementById("home").classList.add("active");
                break;
            case "/sobre":
                document.getElementById("sobre").classList.add("active");
                break;
            default:
                document.getElementById("home").classList.add("active");
                break;
        }
    }
    render () { 
        return(
            <>
                <nav>
                    <div></div>
                    <div className="enlacesNavegacion">
                        <ul className="paginas">
                            <li id="home">
                                <Link to="/">Home</Link>
                            </li>
                            <li id="sobre">
                                <Link to="/sobre">Sobre mí</Link>
                            </li>
                            <li>
                                <Link to="/skills">Skills</Link>
                            </li>
                            <li>
                                <Link to="/">Experiencia</Link>
                            </li>
                            <li>
                                <Link to="/">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navegacion