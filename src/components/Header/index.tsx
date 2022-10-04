import { HeaderContainer, HeaderContent, HeaderMenu } from "./styles";

export function Header() {

  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          
        </div>

        <HeaderMenu>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#aboutMe">About me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </HeaderMenu>
      </HeaderContent>
    </HeaderContainer>
  )
}