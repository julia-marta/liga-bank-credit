import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import FormFieldset from "../form-fieldset/form-fieldset";
import CalculatorStep from "../calculator-step/calculator-step";
import CalculatorSelect from "../calculator-select/calculator-select";
import {CalculatorStage, CalculatorFormField} from "../../const";

const CalculatorStepOne = ({creditPurpose, onChangeSelect}) => {

  return (
    <Fragment>
      <CalculatorStep name={CalculatorStage.ONE.name} title={CalculatorStage.ONE.title}>
        <FormFieldset name={CalculatorFormField.SELECT.name} legend={CalculatorFormField.SELECT.legend}>
          <CalculatorSelect creditPurpose={creditPurpose} defaultValue={CalculatorFormField.SELECT.defaultValue} onChangeSelect={onChangeSelect} />
        </FormFieldset>
      </CalculatorStep>
    </Fragment>
  );
};

CalculatorStepOne.propTypes = {
  creditPurpose: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]).isRequired,
  onChangeSelect: PropTypes.func.isRequired,
};

export default CalculatorStepOne;
