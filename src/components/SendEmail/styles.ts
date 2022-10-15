import styled from "styled-components";

export const SendEmailContainer = styled.div`
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

  @media (max-width: 768px) {
    height: auto;
    padding: 1rem;
  }

  @media (max-width: 426px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

export const SendEmailContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SendEmailForm = styled.form`
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  input, label {
    display: block;
  }

  input {
    width: 100%;
    height: 3rem;
    background-color: ${props => props.theme["gray-700"]};
    color: ${props => props.theme["gray-100"]};
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
  }

  input:hover {
    border:1px solid ${props => props.theme["orange-600"]};
  }

  textarea {
    width: 30rem;
    height: 8rem;
    color: ${props => props.theme["gray-100"]};
    background-color: ${props => props.theme["gray-700"]};
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 8px;
    font-size: 1rem;
    resize: none;
    
    @media (max-width: 426px) {
      width: 100%;
    }
  }

  textarea:hover {
    border:1px solid ${props => props.theme["orange-600"]};
  }

  button {
    color: ${props => props.theme["gray-100"]};
    background-color: ${props => props.theme["orange-300"]};
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 8px;
    font-size: 1rem;
  }

  button:hover {
    background-color: ${props => props.theme["orange-600"]};
    transition: background-color 0.3s;
  }
`;