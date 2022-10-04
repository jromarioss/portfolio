import styled from "styled-components";

export const MyContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 5rem;
`;

export const MyContactsCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;


export const MyContactsCards = styled.div`
  width: 13rem;
  padding: .75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 1px solid ${props => props.theme["orange-400"]};
  border-radius: 8px;

  img {
    width: 4rem;
  }

  a {
    background-color: ${props => props.theme["orange-400"]};
    padding: .5rem;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
  }

  &:hover {
    background-color: ${props => props.theme["gray-800"]};
  }
`;

export const Pdf = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  a {
    font-size: 1.5rem;

    &:hover {
      color: ${props => props.theme["orange-400"]};
      transition: color 0.3s;
    }
  }
`;