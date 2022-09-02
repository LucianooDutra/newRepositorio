import React from 'react';
import myWallet from '../images/myWallet.jpeg';
import mySongs from '../images/mySongs.jpeg';
import cookACookie from '../images/cookACookie.jpeg';
import formulario from '../images/formulario.jpeg';
import '../css/Projetos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

export default function Projects() {
  return (
    <div id="projetos">
      <section>
        <div className="projetosHeader">
          <h3>Projetos</h3>
          <br></br>
          <p>Aqui estão alguns dos projetos em que trabalhei</p>
          <p>Você pode encontrar o código no Github e uma demonstração ao vivo do projeto</p>
        </div>
        <br></br>
        <nav className="nav">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="carousel"
          >
            <SwiperSlide>
              <div className="carouselProjeto">
                <div className="carouselProjetoImage">
                  <a href="https://projeto-wallet-lrgfwbelv-lucianoodutra.vercel.app/ "   target="_blank"  rel="noreferrer"
                  >
                    <img src={ myWallet } alt="My Wallet" width="350px"/>
                  </a>
                </div>
                <div className="carouselProjetoDescription">
                  <div className="carouselProjetoDescriptionDivA">
                    <a href="https://projeto-wallet-lrgfwbelv-lucianoodutra.vercel.app/"    target="_blank" rel="noreferrer"><strong>My Wallet</strong></a>
                    <a href="https://github.com/LucianooDutra/projetoWallet" target="_blank" rel="noreferrer"><strong>Repositório GitHub</strong></a>
                  </div>
                  <div className="carouselProjetoDescriptionDivPUL">
                    <p>Foi desenvolvido uma carteira de controle de gastos com conversor de moedas, ao utilizar essa aplicação um usuário deverá ser capaz de Adicionar, remover e editar um gasto; Visualizar uma tabela com seus gastos; Visualizar o total de gastos convertidos para o Real;</p>
                    <h5>Tecnologias utilizadas:</h5>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Redux</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carouselProjeto">
                <div className="carouselProjetoImage">
                  <a href="https://projeto-my-songs-lsv3f3knt-lucianoodutra.vercel.app/" target="_blank"  rel="noreferrer"
                  >
                    <img src={ mySongs } alt="My Songs" width="350px"/>
                  </a>
                </div>
                <div className="carouselProjetoDescription">
                  <div className="carouselProjetoDescriptionDivA">
                    <a href="https://projeto-my-songs-lsv3f3knt-lucianoodutra.vercel.app/" target="_blank" rel="noreferrer"><strong>My Songs</strong></a>
                    <a href="https://github.com/LucianooDutra/projetoMySongs" target="_blank" rel="noreferrer"><strong>Repositório GitHub</strong></a>
                  </div>
                  <div className="carouselProjetoDescriptionDivPUL">
                    <p>Foi desenvolvido uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas. Essa aplicação será capaz de Fazer login; Pesquisar por uma banda ou artista; Listar os álbuns disponíveis dessa banda ou artista; Visualizar as músicas de um álbum selecionado; Reproduzir uma prévia das músicas deste álbum; Favoritar e desfavoritar músicas; Ver a lista de músicas favoritas; Ver o perfil da pessoa logada.</p>
                    <h5>Tecnologias utilizadas:</h5>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Ciclos de vida React</li>
                      <li>Requisições da API: itunes Apple</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carouselProjeto">
                <div className="carouselProjetoImage">
                  <a href="https://projeto-app-de-receitas-lilac.vercel.app/" target="_blank"  rel="noreferrer"
                  >
                    <img src={ cookACookie } alt="Cook a Cookie" width="350px"/>
                  </a>
                </div>
                <div className="carouselProjetoDescription">
                  <div className="carouselProjetoDescriptionDivA">
                    <a href="https://projeto-app-de-receitas-lilac.vercel.app/" target="_blank" rel="noreferrer"><strong>Cook a Cookie</strong></a>
                    <a href="https://github.com/LucianooDutra/projetoAppDeReceitas" target="_blank" rel="noreferrer"><strong>Repositório GitHub</strong></a>
                  </div>
                  <div className="carouselProjetoDescriptionDivPUL">
                    <p>Foi desenvolvido um app de receitas. Essa aplicação será capaz de ver, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas e drinks!</p>
                    <p>Projeto feito em grupo</p>
                    <h5>Tecnologias utilizadas:</h5>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Redux</li>
                      <li>Context API</li>
                      <li>React Hook</li>
                      <li>Requisições das API: TheMealDB, The CockTailDB</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carouselProjeto">
                <div className="carouselProjetoImage">
                  <a href="https://projeto-formulario-bay.vercel.app/" target="_blank"  rel="noreferrer"
                  >
                    <img src={ formulario } alt="Formulário" width="350px"/>
                  </a>
                </div>
                <div className="carouselProjetoDescription">
                  <div className="carouselProjetoDescriptionDivA">
                    <a href="https://projeto-formulario-bay.vercel.app/" target="_blank" rel="noreferrer"><strong>Formulário de cadastro</strong></a>
                    <a href="https://github.com/LucianooDutra/projetoFormulario" target="_blank" rel="noreferrer"><strong>Repositório GitHub</strong></a>
                  </div>
                  <div className="carouselProjetoDescriptionDivPUL">
                    <p>Foi desenvolvido uma página de formulário da Escola "TrybeWarts", em que as pessoas estudantes poderão enviar seus feedbacks sobre ela.</p>
                    <h5>Tecnologias utilizadas:</h5>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </nav>
      </section>
      <div className="hr"></div>
    </div>
  );
}