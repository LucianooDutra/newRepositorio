import React from 'react';
import {
  SiGit,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTestinglibrary,
  SiJest,
  SiNodedotjs,
  SiDocker,
  SiMysql,
  SiBootstrap,
} from "react-icons/si";
import { MdPeople, MdOutlineLeaderboard } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import { BsCloudHaze, BsFillAlarmFill } from "react-icons/bs";
import { BiBrain } from "react-icons/bi";
import '../css/Skills.css';

export default function Skills() {
  return (
    <div id="Habilidades">
      <section className="habilidadesHardSkills">
        <div>
          <h3>Hard Skills</h3>
        </div>
        <div className="habilidades-hard">
          <div className="habilidadesHardSkillsSkins">
            <div>
              <SiGit className="hardSkillsIcon"/>
              <p>GitHub</p>
            </div>
            <div>
              <SiHtml5 className="hardSkillsIcon"/>
              <p>HTML</p>
            </div>
            <div>
              <SiCss3 className="hardSkillsIcon"/>
              <p>CSS</p>
            </div>
            <div>
              <SiBootstrap className="hardSkillsIcon"/>
              <p>Bootstrap</p>
            </div>
            <div>
              <SiJavascript className="hardSkillsIcon"/>
              <p>JavaScript</p>
            </div>
            <div>
              <SiTypescript className="hardSkillsIcon"/>
              <p>TypeScript</p>
            </div>
            <div>
              <SiReact className="hardSkillsIcon"/>
              <p>React</p>
            </div>
            <div>
              <SiRedux className="hardSkillsIcon"/>
              <p>Redux</p>
            </div>
            <div>
              <SiTestinglibrary className="hardSkillsIcon"/>
              <p>Testinglibrary</p>
            </div>
            <div>
              <SiJest className="hardSkillsIcon"/>
              <p>Jest</p>
            </div>
            <div>
              <SiNodedotjs className="hardSkillsIcon"/>
              <p>Node.JS</p>
            </div>
            <div>
              <SiDocker className="hardSkillsIcon"/>
              <p>Docker</p>
            </div>
            <div>
              <SiMysql className="hardSkillsIcon"/>
              <p>MySQL</p>
            </div>
          </div>
        </div>
      </section>
      <div className="hrSkill"></div>
      <section className="habilidadesSoftSkills">
        <div>
          <h3>Soft Skills</h3>
        </div>
        <div className="habilidadesSoftSkillsSkins">
          <div>
            <MdPeople className="hardSkillsIcon"/>
            <p>Comunicação</p>
          </div>
          <div>
            <RiTeamFill className="hardSkillsIcon"/>
            <p>Trabalho em equipe</p>
          </div>
          <div>
            <FaHandsHelping className="hardSkillsIcon"/>
            <p>Prestativo</p>
          </div>
          <div>
            <BsCloudHaze className="hardSkillsIcon"/>
            <p>Resiliência</p>
          </div>
          <div>
            <BsFillAlarmFill className="hardSkillsIcon"/>
            <p>Proatividade</p>
          </div>
          <div>
            <BiBrain className="hardSkillsIcon"/>
            <p>Pensamento Crítico</p>
          </div>
          <div>
            <MdOutlineLeaderboard className="hardSkillsIcon"/>
            <p>Liderança</p>
          </div>
        </div>
      </section>
      <div className="hr"></div>
    </div>
  );
}