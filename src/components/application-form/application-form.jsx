import React, {useCallback, useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import FormFieldset from "../form-fieldset/form-fieldset";
import Label from "../label/label";
import Input from "../input/input";
import InputRef from "../input-ref/input-ref";
import InputMasked from "../input-masked/input-masked";
import {ApplicationFormField} from "../../const";

const {NAME, PHONE, EMAIL} = ApplicationFormField;

const ApplicationForm = ({clientData, onChangeInput}) => {

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
          <Label name={NAME.name} label={NAME.placeholder} />
          <InputRef ref={inputName} name={NAME.name} type={NAME.type} value={clientData[NAME.name]}
            placeholder={NAME.placeholder} onChangeInput={handleFieldChange} />
        </FormFieldset>

        <FormFieldset name={PHONE.name} legend={PHONE.legend}>
          <Label name={PHONE.name} label={PHONE.placeholder} />
          <InputMasked mask={PHONE.mask} name={PHONE.name} type={PHONE.type} value={clientData[PHONE.name]}
            placeholder={PHONE.placeholder} onChangeInput={handleFieldChange} />
        </FormFieldset>

        <FormFieldset name={EMAIL.name} legend={EMAIL.legend}>
          <Label name={EMAIL.name} label={EMAIL.placeholder} />
          <Input name={EMAIL.name} type={EMAIL.type} value={clientData[EMAIL.name]} placeholder={EMAIL.placeholder}
            onChangeInput={handleFieldChange} />
        </FormFieldset>
      </div>
  );
};

ApplicationForm.propTypes = {
  clientData: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  onChangeInput: PropTypes.func.isRequired,
}

export default ApplicationForm;
