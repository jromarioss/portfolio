import styled, { css } from "styled-components";

export const MenuContainer = styled.div`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index:5;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(2,0,36);
  background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(255,101,0,0.6671043417366946) 66%, rgba(255,85,0,0.6446953781512605) 100%);

  svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;

    a {
      font-size: 1.5rem;
      font-weight: bold;
      text-shadow: 1px 1px 1px black;
    }
  }
`;