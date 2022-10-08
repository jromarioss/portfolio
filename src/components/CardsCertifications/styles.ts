import styled from "styled-components";

export const CertificationContainer = styled.section`
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

export const CertificationCard = styled.div`
  width: 100%;
`;

export const CertificationCards = styled.div`
  padding-left: 10rem;

  img {
    width: 800px;
  }

  @media (max-width: 768px) {
    padding-left: 3.8rem;

    img {
      width: 600px;
    }
  }

  @media (max-width: 426px) {
    padding-left: 0rem;

    img {
      width: 390px;
    }
  }

  @media (max-width: 376px) {
    img {
      width: 346px;
    }
  }
`;