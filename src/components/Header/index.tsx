import { HeaderContainer, HeaderContent, HeaderMenu } from "./styles";

export function Header() {

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderMenu>
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