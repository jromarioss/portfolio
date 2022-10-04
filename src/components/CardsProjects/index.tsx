import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { SectionProjects, SectionProjectsCard, SectionProjectsCards, SectionProjectsCardsButton } from "./styles";

import relogioImg from "../../assets/relogio.png";
import batalhaImg from "../../assets/batalha_naval.png";
import desafio01Img from "../../assets/ignite_desafio01.png";
import desafio02Img from "../../assets/ignite_desafio02.png";

export function CardsProjects() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 20,
        }
      },
      '(max-width: 426px)': {
        slides: {
          perView: 1.4,
          spacing: 20,
        }
      }
    },
  });

  return (
    <SectionProjects id="projects">
      <h2>Meus Projetos</h2>

      <SectionProjectsCard ref={ref} className="keen-slider">

        <SectionProjectsCards className="keen-slider__slide">
          <img src={relogioImg} alt="" />
          <h3>Relógio Analógico e Digital</h3>
          <p>Projeto feito em HTML, CSS e JavaScript, um relógio analógico e digital.</p>
          <SectionProjectsCardsButton>
            <a href="https://jromarioss.github.io/relogio_digital/" target="_blank">
              Acessar o projeto
            </a>
            
            <a href="https://github.com/jromarioss/relogio_digital" target="_blank">
              Acessar o código
            </a>
          </SectionProjectsCardsButton>
        </SectionProjectsCards>

        <SectionProjectsCards className="keen-slider__slide">
          <img src={batalhaImg} alt="" />
          <h3>Batalha Naval</h3>
          <p>Projeto feito em HTML, CSS e JavaScript, um jogo simples de Batalha Naval.</p>
          <SectionProjectsCardsButton>
            <a href="https://jromarioss.github.io/batalha_naval/" target="_blank">
              Acessar o projeto
            </a>
            
            <a href="https://github.com/jromarioss/batalha_naval" target="_blank">
              Acessar o código
            </a>
          </SectionProjectsCardsButton>
        </SectionProjectsCards>

        <SectionProjectsCards className="keen-slider__slide">
          <img src={desafio01Img} alt="" />
          <h3>Todo List</h3>
          <p>Desafio 01 do Ignite feito em React Js, um projeto de uma lista de tarefas.</p>
          <SectionProjectsCardsButton>
            <a href="https://jromarioss-ignite-react-js-desafio01.vercel.app/" target="_blank">
              Acessar o projeto
            </a>
            
            <a href="https://github.com/jromarioss/ignite_reactJs_desafio01" target="_blank">
              Acessar o código
            </a>
          </SectionProjectsCardsButton>
        </SectionProjectsCards>

        <SectionProjectsCards className="keen-slider__slide">
          <img src={desafio02Img} alt="" />
          <h3>Coffee Delivery</h3>
          <p>Desafio 02 do Ignite feito em React Js, um projeto de entrega de café.</p>
          <SectionProjectsCardsButton>
            <a href="https://jromarioss-ignite-react-js-desafio02.vercel.app/" target="_blank">
              Acessar o projeto
            </a>
            
            <a href="https://github.com/jromarioss/ignite_reactJs_desafio02" target="_blank">
              Acessar o código
            </a>
          </SectionProjectsCardsButton>
        </SectionProjectsCards>
        
      </SectionProjectsCard>
    </SectionProjects>
  );
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
