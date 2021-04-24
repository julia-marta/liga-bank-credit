import React from 'react';
import PropTypes from "prop-types";

const Logo = ({name, isMobileLogo}) => {

  return (
    <div className={`${name}__logo`}>
      {/* eslint-disable-next-line */}
      <a href="#">
        <img src={isMobileLogo ? `img/mobile_logo.svg` : `img/logo.svg`} width="150" height="27" alt="Логотип Лига Банка"/>
      </a>
    </div>
  );
};
Logo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Logo;
