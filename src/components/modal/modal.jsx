import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import Login from "../login/login";
import Icon from "../icon/icon";
import {IconType} from "../../const";

const Modal = ({isActive, onCloseButtonClick}) => {

  return (
    <Fragment>
      {isActive && <section className="modal">
        <h2 className="visually-hidden">Вход в интернет-банк</h2>
        <div className="modal__window">
          <div className="modal__header">
            <img src="img/modal_logo.svg" width="151" height="31" alt="Логотип интернет-банка Лига Банка"/>
            <button type="button" className="modal__close" aria-label="Закрыть окно" onClick={onCloseButtonClick}>
              <Icon icon={IconType.CLOSE} />
            </button>
          </div>
          <Login onSubmitForm={onCloseButtonClick} />
        </div>
      </section>
      }
    </Fragment>
  );
};

Modal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onCloseButtonClick: PropTypes.func.isRequired,
};

export default Modal;
