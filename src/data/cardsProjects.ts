import relogioImg from "../assets/relogio.png";
import batalhaImg from "../assets/batalha_naval.png";
import desafio01Img from "../assets/ignite_desafio01.png";
import desafio02Img from "../assets/ignite_desafio02.png";

interface ProjectsProps {
  id: number;
  title: string;
  description: string;
  linkProject: string;
  linkGithub: string;
  img: any;
}

export const cardsProjects: ProjectsProps[] = [
  {
    id: 1,
    title: "Relógio Analógico e Digital",
    description: "Projeto feito em HTML, CSS e JavaScript, um relógio analógico e digital.",
    linkProject: "https://jromarioss.github.io/relogio_digital/",
    linkGithub: "https://github.com/jromarioss/relogio_digital",
    img: relogioImg,
  },
  {
    id: 2,
    title: "Batalha Naval",
    description: "Projeto feito em HTML, CSS e JavaScript, um jogo simples de Batalha Naval.",
    linkProject: "https://jromarioss.github.io/batalha_naval/",
    linkGithub: "https://github.com/jromarioss/batalha_naval",
    img: batalhaImg,
  },
  {
    id: 3,
    title: "Todo List",
    description: "Desafio 01 do Ignite feito em React Js, um projeto de uma lista de tarefas.",
    linkProject: "https://jromarioss-ignite-react-js-desafio01.vercel.app/",
    linkGithub: "https://github.com/jromarioss/ignite_reactJs_desafio01",
    img: desafio01Img,
  },
  {
    id: 4,
    title: "Coffee Delivery",
    description: "Desafio 02 do Ignite feito em React Js, um projeto de entrega de café.",
    linkProject: "https://jromarioss-ignite-react-js-desafio02.vercel.app/",
    linkGithub: "https://github.com/jromarioss/ignite_reactJs_desafio02",
    img: desafio02Img,
  },
];