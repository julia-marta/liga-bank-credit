import React from 'react';
import PropTypes from "prop-types";

const Slide = ({index, text, button}) => {

  return (
    <div className={`slide slide--${index}`}>
      <div className="slide__wrapper container">
          <p className="slide__title">Лига Банк</p>
          <p className="slide__subtitle">{text}</p>
          {/* eslint-disable-next-line */}
          {button && <a className={`slide__button button ${button.className}`} href={button.link}>{button.text}</a>}
        </div>
      </div>
  );
};

Slide.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  button: PropTypes.shape({
    className: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
}

export default Slide;
