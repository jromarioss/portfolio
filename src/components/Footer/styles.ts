import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100vw;
  padding: 1.5rem;
  text-align: center;
  background-color: ${props => props.theme["gray-900"]};
  border-top: 1px solid ${props => props.theme["orange-500"]};
  margin-top: 5rem;
`;