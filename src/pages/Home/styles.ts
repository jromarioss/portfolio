import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 70rem;
  margin: auto;
  margin-top: 5rem;
`;

export const HomeSectionHeader = styled.section`
  width: 100%;
  height: calc(100vh - 5rem);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 16rem;
    border-radius: 8px;
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
`;

export const SectionHeaderIcon = styled.div`
  img {
    width: 2.5rem;

    &:hover {
      background-color: ${props => props.theme["orange-500"]};
      transition: background-color 0.3s;
    }
  }
`;

export const SectionAboutMe = styled.section`
  width: 100%;
  height: calc(100vh - 5rem);
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;