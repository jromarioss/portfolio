import {Link} from "react-scroll";

import { HeaderContainer, HeaderContent, HeaderMenu } from "./styles";

import menuImg from '../../assets/menuIcon.svg';

export function Header({ setMenuActive }: any) {

  return (
    <HeaderContainer id='home'>
      <HeaderContent>
        <HeaderMenu>
          <img src={menuImg} alt="" onClick={() => setMenuActive(true)} />

          <ul>
            <li><Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Início</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={-10} duration={500}>Sobre mim</Link></li>
            <li><Link to="skills" spy={true} smooth={true} offset={-10} duration={500}>Habilidades</Link></li>
            <li><Link to="projects" spy={true} smooth={true} offset={-10} duration={500}>Projetos</Link></li>
            <li><Link to="certifications" spy={true} smooth={true} offset={-10} duration={500}>Certificações</Link></li>
            <li><Link to="contacts" spy={true} smooth={true} offset={-100} duration={500}>Contacts</Link></li>
          </ul>
        </HeaderMenu>
      </HeaderContent>
    </HeaderContainer>
  );
}