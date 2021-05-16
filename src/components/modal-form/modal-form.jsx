import React, {useState, useCallback, useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import FormFieldset from "../form-fieldset/form-fieldset";
import Label from "../label/label";
import Input from "../input/input";
import InputRef from "../input-ref/input-ref";
import Icon from "../icon/icon";
import {saveUserData} from "../../store/slice";
import {IconType, ModalFormField} from "../../const";

const {LOGIN, PASSWORD} = ModalFormField;

const ModalForm = ({userData, saveUser, onSubmitForm}) => {

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const inputLogin = useRef();

  useEffect(() => {
    inputLogin.current.focus();
  }, []);

  const handleFieldChange = useCallback(
    (evt) => {
      saveUser({...userData, [evt.target.name]: evt.target.value});
    }, [userData, saveUser]
  );

  const handleShowPassword = useCallback(
    () => {
      setPasswordVisible(true)
    }, []
  );

  const handleHidePassword = useCallback(
    () => {
      setPasswordVisible(false)
    }, []
  );

  const handleFormSubmit = useCallback(
    (evt) => {
     evt.preventDefault();

      saveUser(userData);
      onSubmitForm(evt);

    }, [saveUser, userData, onSubmitForm]
  );

    return (
        <form action="#" className="modal__form form" onSubmit={handleFormSubmit}>

          <FormFieldset name={LOGIN.name} legend={LOGIN.legend}>
            <Label name={LOGIN.name} label={LOGIN.label} isLabelVisible={true}/>
            <InputRef ref={inputLogin} name={LOGIN.name} type={LOGIN.type} value={userData[LOGIN.name]} onChangeInput={handleFieldChange} />
          </FormFieldset>

          <FormFieldset name={PASSWORD.name} legend={PASSWORD.legend}>
            <Label name={PASSWORD.name} label={PASSWORD.label} isLabelVisible={true}/>
            <Input name={PASSWORD.name} type={isPasswordVisible ? PASSWORD.type.visible : PASSWORD.type.invisible}
              value={userData[PASSWORD.name]} onChangeInput={handleFieldChange} />
            <button className="form__show-password" type="button" aria-label="Показать пароль"
              onMouseDown={handleShowPassword} onMouseUp={handleHidePassword} onMouseLeave={handleHidePassword}
              onTouchStart={handleShowPassword} onTouchEnd={handleHidePassword} onTouchCancel={handleHidePassword}>
                <Icon icon={IconType.PASSWORD} />
            </button>
          </FormFieldset>

          {/* eslint-disable-next-line */}
          <a className="form__restore-password" href="#">Забыли пароль?</a>
          <button className="form__submit form__submit--login button" type="submit" >Войти</button>
        </form>
      );
};

ModalForm.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  saveUser: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
}

const mapStateToProps = (store) => ({
  userData: store.userData,
});

const mapDispatchToProps = (dispatch) => ({
  saveUser(data) {
    dispatch(saveUserData(data));
  },
});

export {ModalForm};
export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
