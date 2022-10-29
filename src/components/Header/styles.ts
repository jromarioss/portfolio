import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 4rem;
  background-color: ${props => props.theme["gray-900"]};
  border-bottom: 1px solid ${props => props.theme["orange-500"]};

  @media (max-width: 426px) {
    border-bottom: none;
    display: block;
  }
`;

export const HeaderContent = styled.div`
  width: 70rem;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 426px) {
    justify-content: end;
  }
`;

export const HeaderMenu = styled.nav`
  img {
    display: none;
  }

  ul {
    display: flex;
    gap: 1.25rem;
  }

  li a {
    font-size: 1.25rem;
  }

  a:hover {
    border-bottom: 2px solid ${props => props.theme["orange-100"]};
    color: ${props => props.theme["orange-100"]};
    transition: color 0.3s;
  }

  li a.active {
    border-bottom: 2px solid ${props => props.theme["orange-100"]};
    color: ${props => props.theme["orange-100"]};
  }

  @media (max-width: 768px) {
    ul {
      display: flex;
      gap: 1rem;
    }
    li a {
      margin-right: 0;
    }
  }

  @media (max-width: 426px) {
    img {
      display: block;
      margin-right: 1.5rem;
    }

    ul {
      display: none;
    }
  }
`;