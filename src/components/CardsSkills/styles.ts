import styled from "styled-components";

export const SectionSkills = styled.section`
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

export const SectionSkillsCard = styled.div`
  display: flex;
`;

export const SectionSkillsCards = styled.div`
  width: 15rem;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  border: 1px solid ${props => props.theme["orange-500"]};
  border-radius: 8px;

  img {
    width: 5rem;
  }

  &:hover {
    background-color: ${props => props.theme["gray-800"]};
  }
`;