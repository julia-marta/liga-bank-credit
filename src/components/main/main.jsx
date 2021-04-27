import React from 'react';
import PropTypes from "prop-types";
import Slider from "../slider/slider";

const Main = ({isMobile, isTablet}) => {

  return (
    <main className="main">
      <h1 className="visually-hidden">Сайт «Лига Банка»: Кредитный калькулятор</h1>
      <Slider isSwipeable={isMobile || isTablet} />
    </main>
  );
};

Main.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
};

export default Main;
