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
    left: 100px;
  }

  .arrow--right {
    left: auto;
    right: 100px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    width: 39rem;

    .arrow--left {
      left: -30px;
    }

    .arrow--right {
      right: -30px;
    }
  }

  @media (max-width: 426px) {
    width: 22rem;

    .arrow {
      width: 20px;
      height: 20px;
    }

    .arrow--left {
      left: -25px;
    }

    .arrow--right {
      right: -25px;
    }
  }

  @media (max-width: 376px) {
    width: 19rem;
  }
`;

export const CertificationCards = styled.div`
  padding-left: 10rem;

  img {
    width: 800px;
  }

  @media (max-width: 768px) {
    padding-left: 1rem;

    img {
      width: 600px;
    }
  }

  @media (max-width: 426px) {
    padding-left: 0;

    img {
      width: 350px;
    }
  }

  @media (max-width: 376px) {
    img {
      width: 300px;
    }
  }
`;