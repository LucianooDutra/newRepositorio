import React from 'react';
import '../../css/Principal.css';
import Header from '../../components/Header';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Projetos from '../../components/Projetos';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function Principal() {
  return (
    <div className="principalPage">
      <Header />
      <article className="princioalArticle">
        <About />
        <Skills />
        <Projetos />
        <Contact />
      </article>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}