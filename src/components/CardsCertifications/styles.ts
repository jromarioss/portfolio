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
    width: 21.865rem;

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
    width: 19.5rem;
  }
`;

export const CertificationCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 800px;
    height: 499px;
  }

  @media (max-width: 768px) {
    img {
      width: 600px;
      height: 374px;
    }
  }

  @media (max-width: 426px) {
    img {
      width: 350px;
      height: 220px;
    }
  }
  
  @media (max-width: 376px) {
    img {
      width: 310px;
      height: 189px;
    }
  }
`;