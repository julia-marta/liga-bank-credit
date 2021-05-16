import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Section from "../section/section";
import StepOne from "../step-one/step-one";
import StepTwo from "../step-two/step-two";
import StepThree from "../step-three/step-three";
import Offer from "../offer/offer";
import {saveApplicationData} from "../../store/slice";
import {SectionType, CreditPurpose} from "../../const";

const Calculator = ({propertyValue, initialFee, creditTerm, isMaternalCapital, saveApplication}) => {

  const [purpose, setPurpose] = useState(false);
  const [isCheckout, setCheckout] = useState(false);
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
      setCheckout(false);
      setPurpose(false);
      setModal(true);
      saveApplication({
         purpose: purposeName,
         propertyValue,
         initialFee,
         creditTerm,
        });
    }, [creditTerm, initialFee, propertyValue, purposeName, saveApplication]
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
        <StepThree propertyValue={propertyValue} initialFee={initialFee} creditTerm={creditTerm}
        purpose={purpose} purposeName={purposeName} />}
      </form>
      {/* <PopUp /> */}
    </Section>
  );
};

Calculator.propTypes = {
  propertyValue: PropTypes.number.isRequired,
  initialFee: PropTypes.number.isRequired,
  creditTerm: PropTypes.number.isRequired,
  isMaternalCapital: PropTypes.bool.isRequired,
  saveApplication: PropTypes.func.isRequired,
}

const mapStateToProps = (store) => ({
  propertyValue: store.propertyValue,
  initialFee: store.initialFee,
  creditTerm: store.creditTerm,
  isMaternalCapital: store.isMaternalCapital,
});

const mapDispatchToProps = (dispatch) => ({

  saveApplication(data) {
    dispatch(saveApplicationData(data));
  },
});

export {Calculator};
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
