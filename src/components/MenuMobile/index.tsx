import { X } from 'phosphor-react';
import { Fade } from 'react-awesome-reveal';
import { MenuContainer } from "./styles";

export function MenuMobile({ setOpenMenu }: any) {
  return (
    <Fade duration={300} >
      <MenuContainer>
        <X size={32} onClick={() => setOpenMenu(false)}/>

        <nav>
          <a href="#" onClick={() => setOpenMenu(false)}>Início</a>
          <a href="#aboutMe" onClick={() => setOpenMenu(false)}>Sobre mim</a>
          <a href="#skills" onClick={() => setOpenMenu(false)}>Habilidades</a>
          <a href="#projects" onClick={() => setOpenMenu(false)}>Projetos</a>
          <a href="#certifications" onClick={() => setOpenMenu(false)}>Certificações</a>
          <a href="#contacts" onClick={() => setOpenMenu(false)}>Contatos</a>
        </nav>
      </MenuContainer>
    </Fade>
  );
}