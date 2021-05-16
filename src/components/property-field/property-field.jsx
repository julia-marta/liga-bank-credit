import React, {Fragment, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import Label from '../label/label';
import InputSuffixed from "../input-suffixed/input-suffixed";
import {parseNumberToString, formatString, isNumbersOnly, getInitialFee} from "../../utils";
import {InputControl} from "../../const";

const PropertyField = ({name, label, suffix, minValue, maxValue, value, setValue, setInitialFeeValue}) => {

  const stringValue = parseNumberToString(value);

  const [isError, setError] = useState(false);

  const handleInputChange = useCallback(
    (evt) => {
      const newPropertyValue = formatString(evt.target.value);

      if (!isNumbersOnly(newPropertyValue)) {
        setError(true);
        return;
      }

      const numberPropertyValue = Number(newPropertyValue);

      if (numberPropertyValue < minValue || numberPropertyValue > maxValue) {
        setError(true);
        setValue(numberPropertyValue);
        return;
      }

      if (isError) {
        setError(false);
      }

      setValue(numberPropertyValue);
      setInitialFeeValue(getInitialFee(numberPropertyValue))

    }, [minValue, maxValue, isError, setValue, setInitialFeeValue]
  );

  const handleInputBlur = useCallback(
    () => {
      if (isError) {
        setError(false);
      }

      if (value < minValue) {
        setValue(minValue);
        return;
      }

      if (value > maxValue) {
        setValue(maxValue);
        return;
      }

      return;

    }, [minValue, maxValue, value, isError, setValue]
  );

  const handleControlClick = useCallback(
    (evt) => {
      evt.preventDefault();

      switch (evt.target.id) {
        case InputControl.DECREASE:
          const decreasedValue = value - InputControl.STEP;

          if (decreasedValue < minValue) {
            return;
          }

          setValue(decreasedValue);
          setInitialFeeValue(getInitialFee(decreasedValue))
          break;
        case InputControl.INCREASE:
          const increasedValue = value + InputControl.STEP;

          if (increasedValue > maxValue) {
            return;
          }

          setValue(increasedValue);
          setInitialFeeValue(getInitialFee(increasedValue))
          break;
        default:
          return;
      }

    }, [minValue, maxValue, value, setValue, setInitialFeeValue]
  );

  return (
    <Fragment>
      <Label name={name} label={label} isLabelVisible={true} />
      <InputSuffixed name={name} suffix={suffix} stringValue={stringValue} value={value}
        isError={isError} isErrorMessage={isError} isControls={true} onChangeInput={handleInputChange}
        onBlurInput={handleInputBlur} onClickControl={handleControlClick} />
      <span className="form__sublabel">От 1 200 000&nbsp; до 25 000 000 рублей</span>
    </Fragment>
    );
}

PropertyField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  suffix: PropTypes.arrayOf(PropTypes.string).isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
  setInitialFeeValue: PropTypes.func.isRequired,
}

export default PropertyField;
