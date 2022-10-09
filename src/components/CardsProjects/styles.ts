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
  width: 70rem;
  display: flex;
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
    width: 20rem;

    .arrow {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 376px) {
    width: 19rem;
    .arrow--left {
      left: -32px;
    }

    .arrow--right {
      right: -32px;
    }
  }
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