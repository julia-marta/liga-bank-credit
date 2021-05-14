import React, {Fragment, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import CalculatorInput from "../calculator-input/calculator-input";
import CalculatorRange from "../calculator-range/calculator-range";
import {parseNumberToString, isNumbersOnly} from "../../utils";

const CalculatorTerm = ({name, label, suffix, minValue, maxValue, value, setValue}) => {
  const stringValue = parseNumberToString(value);

  const [isError, setError] = useState(false);
  const [badTerm, setBadTerm] = useState(false);

  const handleInputChange = useCallback(
    (evt) => {

      if (!isNumbersOnly(evt.target.value)) {
        setError(true);
        return;
      }

      const newTerm = Number(evt.target.value);

      if (newTerm < minValue) {
        setError(true);
        setBadTerm(`less`);
        setValue(newTerm);
        return;
      }

      if (newTerm > maxValue) {
        setError(true);
        setBadTerm(`more`);
        setValue(newTerm);
        return;
      }

      if (isError) {
        setError(false);
      }

      if (badTerm) {
        setBadTerm(false);
      }

      setValue(newTerm);

    }, [isError, badTerm, setValue, minValue, maxValue]
  );

  const handleInputBlur = useCallback(
    () => {
      if (isError) {
        setError(false);
      }

      if (badTerm) {
        setBadTerm(false);
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

    }, [minValue, maxValue, value, isError, badTerm, setValue]
  );

  const handleRangeChange = useCallback(
    (evt) => {
      setValue(Number(evt.target.value));
    }, [setValue]
  );

  return (
    <Fragment>
      <CalculatorInput label={label} name={name} suffix={suffix} stringValue={stringValue} value={value}
      isError={isError} onChangeInput={handleInputChange} onBlurInput={handleInputBlur} />
      <CalculatorRange minValue={minValue} maxValue={maxValue} currentValue={value}
      step={1} onChangeRange={handleRangeChange} />
      <div className="form__range-label form__range-label--double">
        <span>{badTerm === `less` ? `< ` : ``} {minValue} лет</span>
        <span>{badTerm === `more` ? `> ` : ``} {maxValue} лет</span>
      </div>
    </Fragment>
  );
}

CalculatorTerm.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  suffix: PropTypes.arrayOf(PropTypes.string).isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
}

export default CalculatorTerm;
