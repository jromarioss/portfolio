import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { SectionSkills, SectionSkillsCard, SectionSkillsCards } from "./styles";

export function CardsSkills() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 4,
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 3,
          spacing: 18,
        }
      },
      '(max-width: 426px)': {
        slides: {
          perView: 1,
        }
      }
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    }
  });

  return (
    <SectionSkills id="skills">
      <h2>Minhas Habilidades</h2>

      <SectionSkillsCard>
        <div ref={sliderRef} className="keen-slider">
          <SectionSkillsCards className="keen-slider__slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Logo HTML5"/>
            <h3>HTML 5</h3>
            <p>HTML é uma linguagem de marcação para web, com suas inúmeras tags, para informar os navegadores como exibir conteúdo. Sempre manter as tags o máximo de semântica possível.</p>
          </SectionSkillsCards>

          <SectionSkillsCards className="keen-slider__slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="Logo CSS3"/>
            <h3>CSS 3</h3>
            <p>CSS mais conhecida como folhas de estilo em cascata, é a linguagem de marcação para o design da web, para estilizar as páginas na web e fazer layouts incríveis.</p>
          </SectionSkillsCards>

          <SectionSkillsCards className="keen-slider__slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Logo JavaScript"/>
            <h3>JavaScript</h3>
            <p>JavaScript uma linguagem de programação, também focada para web, para deixar as páginas mais dinâmicas, e assim dando vida para as páginas web.</p>
          </SectionSkillsCards>

          <SectionSkillsCards className="keen-slider__slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="Logo TypeScript"/>
            <h3>Typescript</h3>
            <p>TypeScript uma linguagem que foi criada pela Microsoft em cima do JavaScript, para adicionar recursos de tipagem estáticas à linguagem, para melhora lá, e também é uma linguagem orientada a objetos.</p>
          </SectionSkillsCards>

          <SectionSkillsCards className="keen-slider__slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Logo Bootstrap"/>
            <h3>Bootstrap</h3>
            <p>Bootstrap é uma framework focado para o front-end, que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples, assim o programador fica focado no back-end.</p>
          </SectionSkillsCards>

          <SectionSkillsCards className="keen-slider__slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Logo Node js"/>
            <h3>Node Js</h3>
            <p>Node js é um ambiente de execução para usar o JavaScript do lado do servidor. Node js executa programação assíncrona de thread único.</p>
          </SectionSkillsCards>

          <SectionSkillsCards className="keen-slider__slide"> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Logo Bootstrap" />
            <h3>React Js</h3>
            <p>Estou estudando React JS no momento, mais React JS é um framework para front-end que te possibilita criar qualquer interface para o front-end dês de mobile até para smart-tv.</p>
          </SectionSkillsCards>
        </div>
        {loaded && instanceRef.current && (
          <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
                />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
                />
            </>
          )}
        </SectionSkillsCard>
    </SectionSkills>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
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
  );
}