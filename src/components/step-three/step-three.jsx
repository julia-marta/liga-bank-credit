import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import CalculatorStep from "../calculator-step/calculator-step";
import Application from "../application/application";
import ApplicationForm from "../application-form/application-form";
import {saveClientData} from "../../store/slice";
import {CalculatorStage} from "../../const";

const StepThree = ({applicationNumber, clientData, saveClient, propertyValue, initialFee, creditTerm, purpose, purposeName}) => {

  return (
    <Fragment>
      <CalculatorStep name={CalculatorStage.THREE.name} title={CalculatorStage.THREE.title}>
        <Application number={applicationNumber} purpose={purpose} purposeName={purposeName}
        propertyValue={propertyValue} initialFee={initialFee} creditTerm={creditTerm} />
        <ApplicationForm clientData={clientData} onChangeInput={saveClient} />
        <button className="form__submit form__submit--send button" type="submit">Отправить</button>
      </CalculatorStep>
    </Fragment>
  );
};

StepThree.propTypes = {
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

export {StepThree};
export default connect(mapStateToProps, mapDispatchToProps)(StepThree);
