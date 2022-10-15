import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { SectionProjects, SectionProjectsCard, SectionProjectsCards, SectionProjectsCardsButton } from "./styles";
import { cardsProjects } from "../../data/cardsProjects";

export function CardsProjects() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 18,
        }
      },
      '(max-width: 426px)': {
        slides: {
          perView: 1,
        }
      }
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    }
  });

  return (
    <SectionProjects id="projects">
      <h2>Meus Projetos</h2>

      <SectionProjectsCard>
        <div ref={sliderRef} className="keen-slider">
          {cardsProjects.map(project => {
            return (
              <SectionProjectsCards className="keen-slider__slide">
                <img src={project.img} alt="" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <SectionProjectsCardsButton>
                  <a href={project.linkProject} target="_blank">
                    Acessar o projeto
                  </a>
                  
                  <a href={project.linkGithub} target="_blank">
                    Acessar o código
                  </a>
                </SectionProjectsCardsButton>
              </SectionProjectsCards>
            );
          })}
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
      </SectionProjectsCard>
    </SectionProjects>
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
