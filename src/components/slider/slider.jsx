import React, {useState, useEffect, useCallback} from 'react';
import Slide from "../slide/slide";
import {SLIDES, SLIDER_INTERVAL, SLIDER_TRANSITION, SLIDER_TRANSLATE} from "../../const";

const Slider = () => {

  const [current, setCurrent] = useState({
    activeSlide: 1,
    direction: 1,
    translate: -(SLIDER_TRANSLATE),
    transition: 0,
    slides: [SLIDES[2], SLIDES[0], SLIDES[1]]
  })

  const {activeSlide, direction, translate, transition, slides} = current;

  const scrollSlideForward = useCallback(
    () => {
      return setCurrent({
        ...current,
        activeSlide: activeSlide === 3 ? 1 : activeSlide + 1,
        translate: translate - SLIDER_TRANSLATE,
        transition: SLIDER_TRANSITION,
      })
    }, [activeSlide, translate, current]
  );

  const scrollSlideBackwards = useCallback(
    () => {
        return setCurrent({
          ...current,
          translate: translate + SLIDER_TRANSLATE,
          transition: SLIDER_TRANSITION,
          activeSlide: activeSlide === 1 ? 3 : activeSlide - 1,
          direction: -1
        })
    }, [activeSlide, translate, current]
  );

  const handleSliderTransition = useCallback(
    () => {
      if (direction === -1) {
        return setCurrent({
            ...current,
            transition: 0,
            translate: -(SLIDER_TRANSLATE),
            slides: [slides[2], slides[0], slides[1]],
            direction: 1
          })
        }

        return setCurrent({
          ...current,
          transition: 0,
          translate: -(SLIDER_TRANSLATE),
          slides: [slides[1], slides[2], slides[0]],
        })
    }, [slides, direction, current]
  );

  useEffect(() => {
    const timer = setInterval(() => {
        scrollSlideForward();
    }, SLIDER_INTERVAL);
    return () => clearInterval(timer);
  });

  return (
    <section className="slider">
      <h2 className="visually-hidden">Слайдер с промо-предложениями</h2>
      <div className="slider__wrapper"
      style={{transform: `translateX(${translate}px)`, transition: `transform ease-out ${transition}s`}}
      onTransitionEnd={handleSliderTransition}>
        {slides.map((slide, index) => {
            return <Slide key={index + 1} index={slide.index} text={slide.text} button={slide.button} />
          })}
      </div>
      <div className="slider__dots">
        {slides.map((_slide, index) => {
          return <span key={index + 1} className={`slider__dot ${index + 1 === activeSlide ? `slider__dot--active` : ``}`} />
        })}
      </div>
    </section>
  );
};

export default Slider;
