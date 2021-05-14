import React, {useState, useCallback, useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import FormFieldset from "../form-fieldset/form-fieldset";
import Icon from "../icon/icon";
import {saveUserData} from "../../store/slice";
import {IconType, ModalFormInput} from "../../const";

const {LOGIN, PASSWORD} = ModalFormInput;

const ModalForm = ({userData, saveUser, onSubmitForm}) => {

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const inputLogin= useRef();

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
            <label className="form__label form__label--modal" htmlFor={LOGIN.name}>Логин</label>
            <input ref={inputLogin} className="form__input" type="text" id={LOGIN.name} name={LOGIN.name}
            value={userData[LOGIN.name]} onChange={handleFieldChange} required />
          </FormFieldset>

          <FormFieldset name={PASSWORD.name} legend={PASSWORD.legend}>
            <label className="form__label form__label--modal" htmlFor={PASSWORD.name}>Пароль</label>
            <input className="form__input" type={isPasswordVisible ? `text` : `password`} id={PASSWORD.name} name={PASSWORD.name}
            value={userData[PASSWORD.name]} onChange={handleFieldChange} required />
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
