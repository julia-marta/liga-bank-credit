import React from 'react';
import PropTypes from 'prop-types';
import InputMask from "react-input-mask";

const InputMasked = ({mask, name, type, value, placeholder, onChangeInput}) => {

  return (
    <InputMask mask={mask} value={value} onChange={onChangeInput}>
      <input className="form__input" type={type} id={name} name={name} placeholder={placeholder ? placeholder : ``} />
    </InputMask>
  );
};

InputMasked.propTypes = {
  mask: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeInput: PropTypes.func.isRequired,
};

export default InputMasked;
