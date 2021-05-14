import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import Icon from "../icon/icon";
import {IconType} from "../../const";

const CalculatorMaternal = ({name, label, value, setValue}) => {

  const handleCheckboxChange = useCallback(
    (evt) => {
      evt.target.checked ? setValue(value) : setValue(0);
    }, [setValue, value]
  );

  return (
    <div className="form__checkbox">
      <input type="checkbox" className="form__checkbox-input visually-hidden" id={name} name={name} onChange={handleCheckboxChange} />
      <label className="form__label form__label--checkbox" htmlFor={name}>
        {label}
        <Icon icon={IconType.CHECKBOX} />
      </label>
    </div>
  );
}

CalculatorMaternal.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
}

export default CalculatorMaternal;
