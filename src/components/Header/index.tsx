import { HeaderContainer, HeaderContent, HeaderMenu } from "./styles";

import menuImg from '../../assets/menuIcon.svg';

export function Header({ setMenuActive }: any) {

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderMenu>
          <img src={menuImg} alt="" onClick={() => setMenuActive(true)} />

          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#aboutMe">Sobre mim</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#certifications">Certificações</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </HeaderMenu>
      </HeaderContent>
    </HeaderContainer>
  )
}