import styled from "styled-components";

export const SectionProjects = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  
  h2 {
    text-align: center;
    font-size: 2.5rem;
  }

  @media (max-width: 426px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

export const SectionProjectsCard = styled.div`
  width: 100%;
  display: flex;
`

export const SectionProjectsCards = styled.div`
  min-width: 22rem;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${props => props.theme["orange-400"]};
  border-radius: 8px;
  text-align: center;
  
  &:hover {
    background-color: ${props => props.theme["gray-800"]};
  }
`

export const SectionProjectsCardsButton = styled.div`
  display: flex;
  gap: 1rem;

  a {
    font-size: 0.75rem;
    border: 0;
    border-radius: 6px;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["orange-100"]};
    padding: 0.75rem;
    cursor: pointer;

    &:hover {
    background-color: ${props => props.theme["orange-600"]};
    transition: background-color 0.3s;
    }
  }
`;