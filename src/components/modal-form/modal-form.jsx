import React, {useState, useCallback, useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {saveUserData} from "../../store/slice";
import Icon from "../icon/icon";
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

          <fieldset className="form__fieldset form__fieldset--login">
            <legend className="visually-hidden">Ввод логина</legend>
            <label className="form__label form__label--modal" htmlFor={LOGIN}>Логин</label>
            <input ref={inputLogin} className="form__input" type="text" id={LOGIN} name={LOGIN}
            value={userData[LOGIN]} onChange={handleFieldChange} required />
          </fieldset>

          <fieldset className="form__fieldset form__fieldset--password">
            <legend className="visually-hidden">Ввод пароля</legend>
            <label className="form__label form__label--modal" htmlFor={PASSWORD}>Пароль</label>
            <input className="form__input" type={isPasswordVisible ? `text` : `password`} id={PASSWORD} name={PASSWORD}
            value={userData[PASSWORD]} onChange={handleFieldChange} required />
            <button className="form__show-password" type="button" aria-label="Показать пароль"
            onMouseDown={handleShowPassword} onMouseUp={handleHidePassword} onMouseLeave={handleHidePassword}
            onTouchStart={handleShowPassword} onTouchEnd={handleHidePassword} onTouchCancel={handleHidePassword}>
              <Icon icon={IconType.PASSWORD} />
            </button>
          </fieldset>

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
