import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import CalculatorStep from "../calculator-step/calculator-step";
import CalculatorApplication from "../calculator-application/calculator-application";
import CalculatorApplicationForm from "../calculator-application-form/calculator-application-form";
import {saveClientData} from "../../store/slice";
import {CalculatorStage} from "../../const";

const CalculatorStepThree = ({applicationNumber, clientData, saveClient, propertyValue, initialFee, creditTerm, purpose, purposeName}) => {

  return (
    <Fragment>
      <CalculatorStep name={CalculatorStage.THREE.name} title={CalculatorStage.THREE.title}>
        <CalculatorApplication number={applicationNumber} purpose={purpose} purposeName={purposeName}
        propertyValue={propertyValue} initialFee={initialFee} creditTerm={creditTerm} />
        <CalculatorApplicationForm clientData={clientData} onChangeInput={saveClient} />
        <button className="form__submit form__submit--send button" type="submit">Отправить</button>
      </CalculatorStep>
    </Fragment>
  );
};

CalculatorStepThree.propTypes = {
  applicationNumber: PropTypes.number.isRequired,
  clientData: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  propertyValue: PropTypes.number.isRequired,
  initialFee: PropTypes.number.isRequired,
  creditTerm: PropTypes.number.isRequired,
  purpose: PropTypes.string.isRequired,
  purposeName: PropTypes.string.isRequired,
  saveClient: PropTypes.func.isRequired,
}

const mapStateToProps = (store) => ({
  applicationNumber: store.application.number,
  clientData: store.application.clientData,
});

const mapDispatchToProps = (dispatch) => ({

  saveClient(data) {
    dispatch(saveClientData(data));
  },
});

export {CalculatorStepThree};
export default connect(mapStateToProps, mapDispatchToProps)(CalculatorStepThree);
