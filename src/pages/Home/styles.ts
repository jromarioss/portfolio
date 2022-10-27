import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 70rem;
  margin: auto;

  @media (max-width: 768px) {
    width: 100vw;
    padding-inline: 3rem;
  }

  @media (max-width: 426px) {
    padding-inline: 1.5rem;
  }
`;

export const HomeSectionHeader = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 16rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    img {
      width: 13rem;
    }
  }

  @media (max-width: 426px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
`;

export const SectionHeaderDiv = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.5rem;

  h1 {
    font-size: 3rem;

    span {
      color: ${props => props.theme["orange-400"]}
    }
  }

  h2 {
    font-size: 2.5rem;

    span {
      color: ${props => props.theme["orange-400"]}
    }
  }

  p {
    font-size: 1rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 426px) {
    text-align: center;
  }
`;

export const SectionAboutMe = styled.section`
  width: 100%;
  height: calc(100vh);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: auto;
    margin-bottom: 3rem;
    flex-direction: column;
    gap: 1rem;

    h2  {
      text-align: center;
    }
  }

  @media (max-width: 426px) {
    img {
      display: none;
    }
  }
`;

export const SectionAboutMeText = styled.section`
  width: 37rem;
  height: 25rem;
  font-size: 1.25rem;
  line-height: 1.6;

  h2 {
    font-size: 2rem;
  }

  p {
    text-align: justify;
  }

  p span {
    color: ${props => props.theme["orange-400"]}
  }

  @media (max-width: 426px) {
    width: 100%;
    height: auto;
    margin: auto;
  }
`;

export const ButtonBackToTop = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
`