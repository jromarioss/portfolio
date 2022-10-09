import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { CertificationCard, CertificationCards, CertificationContainer } from "./styles";

export function CardsCertifications() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 1,
      spacing: 10,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    }
  });

  return (
    <CertificationContainer id="certifications">
      <h2>Meus Certificados</h2>

      <CertificationCard >
        <div ref={sliderRef} className="keen-slider">
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
        </div>
        {loaded && instanceRef.current && (
        <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
              />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
              />
          </>
        )}
      </CertificationCard>
    </CertificationContainer>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}