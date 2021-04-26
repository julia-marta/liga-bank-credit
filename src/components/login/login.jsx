import React, {useState, useCallback, useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {saveUserData} from "../../store/slice";
import Icon from "../icon/icon";
import {IconType, LoginInput} from "../../const";

const {LOGIN, PASSWORD} = LoginInput;

const Login = ({userData, saveUser, onSubmitForm}) => {

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
        <form action="#" className="modal__form login" onSubmit={handleFormSubmit}>
          <div className="login__wrapper">
            <label className="login__label" htmlFor={LOGIN}>Логин</label>
            <input ref={inputLogin} className="login__input" type="text" id={LOGIN} name={LOGIN} 
            value={userData[LOGIN]} onChange={handleFieldChange} required />
          </div>
          <div className="login__wrapper login__wrapper--password">
            <label className="login__label" htmlFor={PASSWORD}>Пароль</label>
            <input className="login__input" type={isPasswordVisible ? `text` : `password`} id={PASSWORD} name={PASSWORD}
            value={userData[PASSWORD]} onChange={handleFieldChange} required />
            <button className="login__show-password" type="button" aria-label="Показать пароль"
            onMouseDown={handleShowPassword} onMouseUp={handleHidePassword} onMouseLeave={handleHidePassword}
            onTouchStart={handleShowPassword} onTouchEnd={handleHidePassword} onTouchCancel={handleHidePassword}>
              <Icon icon={IconType.PASSWORD} />
            </button>
          </div>
          {/* eslint-disable-next-line */}
          <a className="login__link" href="#">Забыли пароль?</a>
          <button className="login__submit button" type="submit" >Войти</button>
        </form>
      );
};

Login.propTypes = {
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

export {Login};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
