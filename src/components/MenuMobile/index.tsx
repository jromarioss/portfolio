import { X } from 'phosphor-react';
import { MenuContainer } from "./styles";

export function MenuMobile({ setMenuActive, menuActive }: any) {
  return (
    <MenuContainer>
      <X size={32} onClick={() => setMenuActive(false)} />

      <nav>
        <a href="#">Início</a>
        <a href="#aboutMe">Sobre mim</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Projetos</a>
        <a href="#certifications">Certificações</a>
        <a href="#contacts">Contacts</a>
      </nav>
    </MenuContainer>
  );
}