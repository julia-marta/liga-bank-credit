import React, {useCallback, useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import FormFieldset from "../form-fieldset/form-fieldset";
import {CalculatorApplicationFormField} from "../../const";

const {NAME, PHONE, EMAIL} = CalculatorApplicationFormField;

const CalculatorApplicationForm = ({clientData, onChangeInput}) => {

  const inputName= useRef();

  useEffect(() => {
    inputName.current.focus();
  }, []);

  const handleFieldChange = useCallback(
    (evt) => {
        onChangeInput({...clientData, [evt.target.name]: evt.target.value});
    }, [clientData, onChangeInput]
  );

  return (
      <div className="calculator__application-form">
        <FormFieldset name={NAME.name} legend={NAME.legend}>
          <label className="visually-hidden" htmlFor={NAME.name}>{NAME.placeholder}</label>
          <input ref={inputName} className="form__input" type="text" id={NAME.name} name={NAME.name}
          value={clientData[NAME.name]} onChange={handleFieldChange} placeholder={NAME.placeholder} />
        </FormFieldset>

        <FormFieldset name={PHONE.name} legend={PHONE.legend}>
          <label className="visually-hidden" htmlFor={PHONE.name}>{PHONE.placeholder}</label>
          <InputMask mask="+7 (999) 999-99-99" value={clientData[PHONE.name]} onChange={handleFieldChange}>
            <input className="form__input" type="tel" id={PHONE.name} name={PHONE.name} placeholder={PHONE.placeholder} />
          </InputMask>
        </FormFieldset>

        <FormFieldset name={EMAIL.name} legend={EMAIL.legend}>
          <label className="visually-hidden" htmlFor={EMAIL.name}>{EMAIL.placeholder}</label>
          <input className="form__input" type="email" id={EMAIL.name} name={EMAIL.name}
          value={clientData[EMAIL.name]} onChange={handleFieldChange} placeholder={EMAIL.placeholder} />
        </FormFieldset>
      </div>
  );
};

CalculatorApplicationForm.propTypes = {
  clientData: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  onChangeInput: PropTypes.func.isRequired,
}

export default CalculatorApplicationForm;
