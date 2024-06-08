import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";

import { HomeContainer, HomeSectionHeader, SectionAboutMe, SectionAboutMeText, SectionHeaderDiv } from "./styles";

import jromarioImg from '../../assets/jromarioss.jpg';

import { SendEmail } from '../../components/SendEmail';
import { CardsSkills } from '../../components/CardsSkills';
import { CardsProjects } from '../../components/CardsProjects';
import { CardsCertifications } from '../../components/CardsCertifications';

export function Home() {

  return (
    <HomeContainer>
      <HomeSectionHeader id='home'>
        <SectionHeaderDiv>
          <h1>
            HELLO <span>WORLD!</span>
          </h1>
          <h2>
            Eu sou <span>José Romário</span>
          </h2>

          <Typewriter
            options={{
              strings: ['Full stack',],
              autoStart: true,
              loop: true,
            }}
          />
        </SectionHeaderDiv>

        <img src="https://avatars.githubusercontent.com/u/73487362?v=4" alt="José Romário" />
      </HomeSectionHeader>
       
      <Fade delay={300} direction="left" duration={1000} >
        <SectionAboutMe id="aboutMe" className='about'>
          <div>
            <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&h=400&q=80" alt="" />
          </div>

          <SectionAboutMeText>
            <h2>Sobre mim</h2>

            <p>Bem-vindo ao meu portfólio! Meu nome é <span>José Romário</span>, e gostaria de compartilhar um pouco da minha trajetória na área de <span>desenvolvimento</span>.</p>

            <p>Minha jornada começou com a decisão de mudar de carreira e me aventurar no mundo do <span>desenvolvimento web</span>, com o objetivo claro de me tornar um desenvolvedor <span>Fullstack</span>. Desde então, tenho me dedicado intensamente aos estudos e à prática para alcançar esse <span>objetivo</span>.</p>

            <p>Neste <span>portfólio</span>, apresento os conhecimentos e habilidades que adquiri ao longo dessa caminhada. Aqui, você encontrará projetos que refletem minha evolução e as diversas <span>tecnologias que domino</span>.</p>

            <p>Um muito <span>Obrigado</span> por visitar meu <span>portfólio</span>!</p>
          </SectionAboutMeText>
        </SectionAboutMe>
      </Fade>

      <Fade delay={300} direction="left" duration={1000} >
        <CardsSkills />
      </Fade>

      <Fade delay={300} direction="left" duration={1000} >
        <CardsProjects />
      </Fade>

      <Fade delay={300} direction="left" duration={1000} >
        <CardsCertifications />
      </Fade>
        
      <Fade delay={300} direction="left" duration={1000} >
        <SendEmail />
      </Fade>
    </HomeContainer>
  );
}