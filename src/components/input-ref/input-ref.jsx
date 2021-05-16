import React from 'react';
import PropTypes from 'prop-types';

const InputRef = React.forwardRef((props, ref) => {

  const {name, type, value, placeholder, onChangeInput} = props;

  return (
    <input ref={ref} className="form__input" type={type} id={name} name={name}
      value={value} onChange={onChangeInput} placeholder={placeholder ? placeholder : ``} />
  );
});

InputRef.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeInput: PropTypes.func.isRequired,
};

export default InputRef;