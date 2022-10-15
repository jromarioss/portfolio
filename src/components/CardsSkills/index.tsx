import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { cardsSkills } from '../../data/cardsSkills';

import { SectionSkills, SectionSkillsCard, SectionSkillsCards } from "./styles";

export function CardsSkills() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 4,
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 3,
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
    <SectionSkills id="skills">
      <h2>Minhas Habilidades</h2>

      <SectionSkillsCard>
        <div ref={sliderRef} className="keen-slider">
          {cardsSkills.map(cardsSkill => {
            return (
              <SectionSkillsCards className="keen-slider__slide" key={cardsSkill.id}>
                <img src={cardsSkill.img} alt=""/>
                <h3>{cardsSkill.title}</h3>
                <p>{cardsSkill.description}</p>
              </SectionSkillsCards>
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
        </SectionSkillsCard>
    </SectionSkills>
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