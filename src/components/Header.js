import React from 'react';
import '../css/Header.css';
// import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import minhaFoto from '../images/euNova.jpeg';

export default function Header() {
  return (
    <div>
      <header id="home">
        <nav className="navHeader">
          <a href="#home">Home</a>
          <a href="#conhecame">Conheça-me</a>
          <a href="#Habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="headerInitialFoto">
          <div className="headerFoto">
            <img src={minhaFoto} alt="Minha foto" width="300px" />
          </div>
          <div className="headerInitial">
            <Typewriter className="headerInitialTypewriter"
              onInit={(typewriter) => {
                typewriter.typeString('Welcome  to my Portfolio')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Bem-vindo ao meu Portfólio')
                  .pauseFor(3000)
                  .start();
              }}
            />
          </div>
        </div>
        <div className="hr"></div>
      </header>
    </div>
  );
}