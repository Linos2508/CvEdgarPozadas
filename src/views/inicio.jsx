import React from "react";
import "./inicio.css";
import Imagen from "../assets/Profile_Image.jpg";
import PDF from "../assets/cv_edgar.pdf";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faDatabase,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
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
  faBootstrap,
  faAws,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home(props) {
  const renderExperience = () => {
    let experiences = [];
    experiences = props.boot.experience.map((item, index) => {
      return <li key={"experience" + index}>{item}</li>;
    });
    return experiences;
  };

  return (
    <>
      <section className="presentacion">
        <div className="idioma">
          <button
            className={props.activeLang === "es" ? "active" : undefined}
            onClick={() => props.language("es")}
            id="Spanish"
          >
            ES
          </button>
          |
          <button
            className={props.activeLang === "en" ? "active" : undefined}
            onClick={() => props.language("en")}
            id="English"
          >
            EN
          </button>
        </div>
        <div className="contenedorPrincipal">
          <div className="informacion">
            <div className="imagen">
              <img src={Imagen} alt="yo" />
            </div>
            <h1>{props.boot.fullName}</h1>
            <h3>{props.boot.title}</h3>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <a href="mailto:epm_1998_eti@hotmail.com">
                epm_1998_eti@hotmail.com
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:5572037160"> 55-7203-7160</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <a href="https://goo.gl/maps/m1i1fpCgeyuvzzBN8">
                {" "}
                Jaramangos 590, Villa de las flores, Coacalco, Estado de México
              </a>{" "}
            </p>
            <div className="socialMedia">
              <a href="https://www.facebook.com/edgar.pozadas/" id="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://github.com/Linos2508" id="github">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/edgar-pozadas-5261b4187/"
                id="linkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href={PDF}
                target="_blank"
                rel="noopener noreferrer"
                id="cvPDF"
              >
                <FontAwesomeIcon icon={faDownload} />
              </a>
            </div>
          </div>
          <div className="masInfo">
            <div className="objetivos">
              <h2>{props.boot.goalTitle}</h2>
              <p>{props.boot.goalText}</p>
            </div>
            <div className="skillsTecnicos">
              <h2>{props.boot.skillsTitle}</h2>
              <div className="lenguajes">
                <article>
                  <FontAwesomeIcon icon={faPython} title="Python3" />
                </article>
                <article>
                  <FontAwesomeIcon icon={faPhp} title="PHP" />
                </article>
                <article>
                  <FontAwesomeIcon icon={faDatabase} title="Databases" />
                </article>
                <article>
                  <FontAwesomeIcon icon={faUbuntu} title="Ubuntu" />
                </article>
                <article>
                  <FontAwesomeIcon icon={faLinux} title="Linux" />
                </article>
                <article>
                  <FontAwesomeIcon icon={faJs} title="JavaScript" />
                </article>
                <article>
                  <FontAwesomeIcon icon={faReact} title="ReactJs" />
                </article>
                <article>
                  <FontAwesomeIcon icon={faAngular} title="Angular" />
                </article>
                <article>
                  <FontAwesomeIcon icon={faHtml5} title="HTML5" />
                </article>
                <article>
                  <FontAwesomeIcon icon={faCss3} title="CSS" />
                </article>
                <article>
                  <FontAwesomeIcon icon={faBootstrap} title="Bootstrap" />
                </article>
                <article>
                  <FontAwesomeIcon
                    icon={faSass}
                    title="SASS (CSS with superpowers)"
                  />
                </article>
                <article>
                  <FontAwesomeIcon icon={faAws} title="Amazon Web Services" />
                </article>
                <article>
                  <FontAwesomeIcon icon={faNodeJs} title="NodeJs" />
                </article>
                <article>
                  <FontAwesomeIcon icon={faGithub} title="CI/CD GitHub" />
                </article>
              </div>
            </div>
            <div className="experienciaLaboral">
              <h2>{props.boot.experienceTitle}</h2>
              <ul>{renderExperience()}</ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
