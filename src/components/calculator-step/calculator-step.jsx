import React from 'react';
import PropTypes from 'prop-types';

const CalculatorStep = ({name, title, children}) => {

  return (
    <div className={`calculator__step calculator__step--${name}`}>
      <h3 className="calculator__step-title">{title}</h3>
      {children}
    </div>
  );
};

CalculatorStep.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
}

export default CalculatorStep;
