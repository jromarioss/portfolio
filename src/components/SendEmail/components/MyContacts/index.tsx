import { MyContactsCard, MyContactsCards, MyContactsContainer, Pdf } from "./styles";

import githubImg from '../../../../assets/githubIcon.svg'
import whatsappImg from '../../../../assets/whatsapp.svg'
import pdfImg from '../../../../assets/pdfIcons.png'

export function MyContacts() {
  return (
    <MyContactsContainer id="contacts">
      <MyContactsCard>
        <MyContactsCards>
        <img src={githubImg} alt="" /> 
            
          <h3>GitHub</h3>

          <a href="https://github.com/jromarioss" target="_blank">Acessar Github</a>
        </MyContactsCards>

        <MyContactsCards>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
            
          <h3>LinkedIn</h3>

          <a href="https://www.linkedin.com/in/jromarioss/" target="_blank">Acessar LinkedIn</a>
        </MyContactsCards>

        <MyContactsCards>
          <img src={whatsappImg}  alt="" /> 

          <h3>Whatsapp</h3>
          <a href="https://wa.me/5515996927826" target="_blank">Acessar Whatsapp</a>
        </MyContactsCards>
      </MyContactsCard>

      <Pdf>
        <a href="/Jose.pdf" download="Jose.pdf" type="application/pdf">Download Currículo</a>
        <img src={pdfImg} alt="" width="30" />
      </Pdf>
    </MyContactsContainer>
  );
}