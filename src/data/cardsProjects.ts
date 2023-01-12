import relogioImg from "../assets/relogio.png";
import batalhaImg from "../assets/batalha_naval.png";
import appImage01 from "../assets/appImage01.png";

interface ProjectsProps {
  id: number;
  title: string;
  description: string;
  linkProject?: string;
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
    linkProject: "https://ignite-react-js-desafio01-qq2epbio2-jromarioss.vercel.app/",
    linkGithub: "https://github.com/jromarioss/ignite_reactJs_desafio01",
    img: "https://github.com/jromarioss/ignite_reactJs_desafio01/blob/main/public/images/capa.png?raw=true",
  },
  {
    id: 4,
    title: "Coffee Delivery",
    description: "Desafio 02 do Ignite feito em React Js, um projeto de entrega de café.",
    linkProject: "https://jromarioss-ignite-react-js-desafio02.vercel.app/",
    linkGithub: "https://github.com/jromarioss/ignite_reactJs_desafio02",
    img: "https://github.com/jromarioss/ignite_reactJs_desafio02/blob/main/public/images/capa.png?raw=true",
  },
  {
    id: 5,
    title: "Github BLogs",
    description: "Desafio 03 do Ignite feito em React Js, um projeto de blogs no github.",
    linkProject: "https://ignite-react-js-desafio03.vercel.app/",
    linkGithub: "https://github.com/jromarioss/ignite_reactJs_desafio03",
    img: "https://github.com/jromarioss/ignite_reactJs_desafio03/blob/main/public/images/capa.png?raw=true",
  }
  ,
  {
    id: 6,
    title: "App lista de compras",
    description: "Aplicativo feito em react native, uma lista de compras.",
    linkProject: "https://github.com/jromarioss/appListaDeCompra",
    linkGithub: "https://github.com/jromarioss/appListaDeCompra",
    img: "https://github.com/jromarioss/appListaDeCompra/blob/main/public/appImage.png?raw=true",
  }
];