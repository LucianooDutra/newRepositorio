import React from 'react';
import {
  SiInstagram,
  SiLinkedin,
  SiGithub,
  SiWhatsapp,
} from "react-icons/si";
import { TbGps } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import { VscFilePdf } from "react-icons/vsc";
import cv from '../files/modeloCurriculo.pdf';
import '../css/Contato.css';

export default function Contact() {
  return (
    <div id="contato">
      <section className="contatoSection">
        <div>
          <h3>Contatos</h3>
        </div>
        <nav className="contatoSectionNav">
          <div className="contatoSectionNavDiv">
            <div>
              <TbGps className="contactIcon"/>
            </div>
            <div>
              <p>Endereço</p>
              <p>João Pessoa/PB, Brazil</p>
            </div>
          </div>
          <div className="contatoSectionNavDiv">
            <div>
              <MdOutlineMail className="contactIcon"/>
            </div>
            <div>
              <p>Email</p>
              <p>lucianoo_dutra@hotmail.com</p>
            </div>
          </div>
          <div className="contatoSectionNavDiv">
            <div>
              <a href="https://www.instagram.com/lucianoodutra/"
              target="_blank" rel="noreferrer"
              >
                <div>
                  <SiInstagram className="contactIcon"/>
                </div>
              </a>
            </div>
            <div>
              <p>Instagram</p>
              <p>lucianoodutra</p>
            </div>
          </div>
          <div className="contatoSectionNavDiv">
            <div>
              <a href="https://www.linkedin.com/in/luciano-dutra-794598212/"
              target="_blank" rel="noreferrer"
              >
                <div>
                  <SiLinkedin className="contactIcon"/>
                </div>
              </a>
            </div>
            <div>
              <p>Linkedin</p>
              <p>Luciano Dutra</p>
            </div>
          </div>
          <div className="contatoSectionNavDiv">
            <div>
              <a href="https://github.com/LucianooDutra" target="_blank"    rel="noreferrer"
              >
                <div>
                  <SiGithub className="contactIcon"/>
                </div>
              </a>
            </div>
            <div>
              <p>Github</p>
              <p>LucianooDutra</p>
            </div>
          </div>
          <div className="contatoSectionNavDiv">
            <div>
              <a href="https://contate.me/lucianodutra" target="_blank" rel="noreferrer"
              >
                <div>
                  <SiWhatsapp className="contactIcon"/>
                </div>
              </a>
            </div>
            <div>
              <p>Phone / WhatsApp</p>
              <p>+55 83 998349452</p>
            </div>
          </div>
          <div className="contatoSectionNavDiv">
            <div>
              <a href={ cv } download target="_blank" rel="noreferrer">
                <div>
                  <VscFilePdf className="contactIcon"/>
                </div>
              </a>
            </div>
            <p>curriculum vitæ</p>
          </div>
        </nav>
      </section>
    </div>
  );
}