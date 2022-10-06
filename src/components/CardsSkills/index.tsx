import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { SectionSkills, SectionSkillsCard, SectionSkillsCards } from "./styles";

export function CardsSkills() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 3,
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
    <SectionSkills id="skills">
      <h2>Minhas Habilidades</h2>

      <SectionSkillsCard ref={ref} className="keen-slider">
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

      </SectionSkillsCard>
    </SectionSkills>

  );
}