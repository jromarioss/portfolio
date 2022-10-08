import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { CertificationCard, CertificationCards, CertificationContainer } from "./styles";

export function CardsCertifications() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 10,
    },
  });


  return (
    <CertificationContainer id="certifications">
      <h2>Meus Certificados</h2>

      <CertificationCard ref={ref} className="keen-slider">
        <CertificationCards className="keen-slider__slide">
          <a href="https://alunos.b7web.com.br/media/certificates/certificado_4059818.jpg" target="_blank">
            <img src="https://alunos.b7web.com.br/media/certificates/certificado_4059818.jpg" alt=""/>
          </a>
        </CertificationCards>

        <CertificationCards className="keen-slider__slide">
          <a href="https://alunos.b7web.com.br/media/certificates/certificado_6650549.jpg" target="_blank">
            <img src="https://alunos.b7web.com.br/media/certificates/certificado_6650549.jpg" alt=""/>
          </a>
        </CertificationCards>

        <CertificationCards className="keen-slider__slide">
          <a href="https://alunos.b7web.com.br/media/certificates/certificado_4859136.jpg" target="_blank">
            <img src="https://alunos.b7web.com.br/media/certificates/certificado_4859136.jpg" alt=""/>
          </a>
        </CertificationCards>

        <CertificationCards className="keen-slider__slide">
          <a href="https://alunos.b7web.com.br/media/certificates/certificado_8759359.jpg" target="_blank">
            <img src="https://alunos.b7web.com.br/media/certificates/certificado_8759359.jpg" alt=""/>
          </a>
        </CertificationCards>

        <CertificationCards className="keen-slider__slide">
          <a href="https://alunos.b7web.com.br/media/certificates/certificado_7990837.jpg" target="_blank">
            <img src="https://alunos.b7web.com.br/media/certificates/certificado_7990837.jpg" alt=""/>
          </a>
        </CertificationCards>

      </CertificationCard>
    </CertificationContainer>
  );
}