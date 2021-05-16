import React from 'react';
import PropTypes from 'prop-types';

const Input = ({name, type, value, placeholder, onChangeInput}) => {

  return (
    <input className="form__input" type={type} id={name} name={name} value={value}
      onChange={onChangeInput} placeholder={placeholder ? placeholder : ``} />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeInput: PropTypes.func.isRequired,
};

export default Input;
