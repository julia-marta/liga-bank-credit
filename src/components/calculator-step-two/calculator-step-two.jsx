import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import FormFieldset from "../form-fieldset/form-fieldset";
import CalculatorStep from "../calculator-step/calculator-step";
import CalculatorProperty from "../calculator-property/calculator-property";
import CalculatorInitial from "../calculator-initial/calculator-initial";
import CalculatorTerm from "../calculator-term/calculator-term";
import CalculatorCheckbox from "../calculator-checkbox/calculator-checkbox";
import {setPropertyValue, setInitialFee, setCreditTerm, setMaternalCapital} from "../../store/slice";
import {CalculatorStage, CalculatorFormField} from "../../const";
import {getInitialFee} from "../../utils";

const {PROPERTY, INITIAL_FEE, CREDIT_TERM, MATERNAL_CAPITAL} = CalculatorFormField;

const CalculatorStepTwo = ({propertyValue, initialFee, creditTerm, changePropertyValue, changeInitialFee, changeCreditTerm, changeMaternalCapital}) => {

  useEffect(() => {
    if (!initialFee) {
      changeInitialFee(getInitialFee(propertyValue));
    }
  });

  return (
    <Fragment>
      <CalculatorStep name={CalculatorStage.TWO.name} title={CalculatorStage.TWO.title}>

        <FormFieldset name={PROPERTY.name} legend={PROPERTY.legend}>
          <CalculatorProperty name={PROPERTY.name} label={PROPERTY.label} suffix={PROPERTY.suffix}
          minValue={PROPERTY.min} maxValue={PROPERTY.max} value={propertyValue} setValue={changePropertyValue}
          setInitialFeeValue={changeInitialFee} />
        </FormFieldset>

        <FormFieldset name={INITIAL_FEE.name} legend={INITIAL_FEE.legend}>
          <CalculatorInitial name={INITIAL_FEE.name} label={INITIAL_FEE.label} suffix={INITIAL_FEE.suffix}
          minValue={getInitialFee(propertyValue)} maxValue={propertyValue} value={initialFee} setValue={changeInitialFee} />
        </FormFieldset>

        <FormFieldset name={CREDIT_TERM.name} legend={CREDIT_TERM.legend}>
          <CalculatorTerm name={CREDIT_TERM.name} label={CREDIT_TERM.label} suffix={CREDIT_TERM.suffix}
          minValue={CREDIT_TERM.min} maxValue={CREDIT_TERM.max} value={creditTerm} setValue={changeCreditTerm} />
        </FormFieldset>

        <FormFieldset name={MATERNAL_CAPITAL.name} legend={MATERNAL_CAPITAL.legend}>
          <CalculatorCheckbox name={MATERNAL_CAPITAL.name} label={MATERNAL_CAPITAL.label} setValue={changeMaternalCapital} />
        </FormFieldset>

      </CalculatorStep>
    </Fragment>
  );
};

CalculatorStepTwo.propTypes = {
  propertyValue: PropTypes.number.isRequired,
  initialFee: PropTypes.number.isRequired,
  creditTerm: PropTypes.number.isRequired,
  changePropertyValue: PropTypes.func.isRequired,
  changeInitialFee: PropTypes.func.isRequired,
  changeCreditTerm: PropTypes.func.isRequired,
  changeMaternalCapital: PropTypes.func.isRequired,
}

const mapStateToProps = (store) => ({
  propertyValue: store.propertyValue,
  initialFee: store.initialFee,
  creditTerm: store.creditTerm,
});

const mapDispatchToProps = (dispatch) => ({
  changePropertyValue(data) {
    dispatch(setPropertyValue(data));
  },
  changeInitialFee(data) {
    dispatch(setInitialFee(data));
  },
  changeCreditTerm(data) {
    dispatch(setCreditTerm(data));
  },
  changeMaternalCapital(data) {
    dispatch(setMaternalCapital(data));
  }
});

export {CalculatorStepTwo};
export default connect(mapStateToProps, mapDispatchToProps)(CalculatorStepTwo);
