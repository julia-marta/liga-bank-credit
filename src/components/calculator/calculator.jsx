import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Section from "../section/section";
import StepOne from "../step-one/step-one";
import StepTwo from "../step-two/step-two";
import StepThree from "../step-three/step-three";
import Offer from "../offer/offer";
import {saveApplication, clearClientData, clearCreditData} from "../../store/slice";
import {SectionType, CreditPurpose} from "../../const";

const Calculator = ({propertyValue, initialFee, creditTerm, isMaternalCapital, saveNewApplication, clearCalculatorForm, clearApplicationForm}) => {

  const [purpose, setPurpose] = useState(false);
  const [isCheckout, setCheckout] = useState(false);
  const [isErrors, setErrors] = useState(false);
  const [isErrorsVisible, setErrorsVisible] = useState(false);
  const [isModal, setModal] = useState(false);

  const purposeName = purpose ? CreditPurpose[purpose.toUpperCase()].label : ``;

  const closeApplicationForm = useCallback(
    () => {
      if (isCheckout) {
        setCheckout(false)
      }

      return;
    }, [isCheckout]
  );

  const handleFormSubmit = useCallback(
    (evt) => {
      evt.preventDefault();

      if (isErrors) {
        setErrorsVisible(true);
        return;
      }

      setCheckout(false);
      setPurpose(false);
      setModal(true);
      saveNewApplication({
         purpose: purposeName,
         propertyValue,
         initialFee,
         creditTerm,
        });
      clearCalculatorForm();
      clearApplicationForm();
    }, [creditTerm, initialFee, propertyValue, purposeName, saveNewApplication, clearApplicationForm, clearCalculatorForm, isErrors]
  );

  return (
    <Section name={SectionType.CALCULATOR.name} title={SectionType.CALCULATOR.title}>
      <form action="#" className="calculator__form form" onSubmit={handleFormSubmit}>
        <div className="calculator__steps-wrapper">
          <StepOne creditPurpose={purpose} onChangePurpose={setPurpose} />

          {purpose && <StepTwo />}
        </div>
        {purpose &&
          <Offer propertyValue={propertyValue} initialFee={initialFee} isMaternalCapital={isMaternalCapital}
        creditTerm={creditTerm} purpose={purpose} onClickCheckout={setCheckout} onChangeData={closeApplicationForm} />}

        {isCheckout &&
        <StepThree propertyValue={propertyValue} initialFee={initialFee} creditTerm={creditTerm} purpose={purpose} 
        purposeName={purposeName} isErrorsVisible={isErrorsVisible} setErrors={setErrors} setErrorsVisible={setErrorsVisible} />}
      </form>

        {/* isModal && <PopUp /> */}
    </Section>
  );
};

Calculator.propTypes = {
  propertyValue: PropTypes.number.isRequired,
  initialFee: PropTypes.number.isRequired,
  creditTerm: PropTypes.number.isRequired,
  isMaternalCapital: PropTypes.bool.isRequired,
  saveNewApplication: PropTypes.func.isRequired,
  clearApplicationForm: PropTypes.func.isRequired,
  clearCalculatorForm: PropTypes.func.isRequired,
}

const mapStateToProps = (store) => ({
  propertyValue: store.creditData.propertyValue,
  initialFee: store.creditData.initialFee,
  creditTerm: store.creditData.creditTerm,
  isMaternalCapital: store.creditData.isMaternalCapital,
});

const mapDispatchToProps = (dispatch) => ({

  saveNewApplication(data) {
    dispatch(saveApplication(data));
  },
  clearCalculatorForm() {
    dispatch(clearCreditData());
  },
  clearApplicationForm() {
    dispatch(clearClientData());
  },

});

export {Calculator};
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
