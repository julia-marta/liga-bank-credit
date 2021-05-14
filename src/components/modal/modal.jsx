import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import ModalForm from "../modal-form/modal-form";
import Icon from "../icon/icon";
import {IconType} from "../../const";

const Modal = ({isActive, isMobile, onCloseButtonClick}) => {

  return (
    <Fragment>
      {isActive && <section className="modal">
        <h2 className="visually-hidden">Вход в интернет-банк</h2>
        <div className="modal__window">
          <div className="modal__header">
            <img src="svg/modal_logo.svg" width="151" height="31" alt="Логотип интернет-банка Лига Банка"/>
            <button type="button" className="modal__close" aria-label="Закрыть окно" onClick={onCloseButtonClick}>
              {isMobile? <Icon icon={IconType.CLOSE_MOBILE} /> : <Icon icon={IconType.CLOSE} />}
            </button>
          </div>
          <ModalForm onSubmitForm={onCloseButtonClick} />
        </div>
      </section>
      }
    </Fragment>
  );
};

Modal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool,
  onCloseButtonClick: PropTypes.func.isRequired,
};

export default Modal;
