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
  width: 70rem;
  position: relative;

  .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: #fff;
    cursor: pointer;
  }

  .arrow--left {
    left: -40px;
  }

  .arrow--right {
    left: auto;
    right: -40px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    width: 39rem;
  }

  @media (max-width: 426px) {
    width: 18rem;

    .arrow {
      width: 20px;
      height: 20px;
    }

    .arrow--left {
      left: -35px;
    }

    .arrow--right {
      right: -35px;
    }
  }
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