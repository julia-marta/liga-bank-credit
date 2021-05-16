import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import Icon from "../icon/icon";
import {IconType} from "../../const";

const Checkbox = ({name, label, setValue}) => {

  const handleCheckboxChange = useCallback(
    (evt) => {
      evt.target.checked ? setValue(true) : setValue(false);
    }, [setValue]
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

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
}

export default Checkbox;
