import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import ModalForm from "../modal-form/modal-form";
import Icon from "../icon/icon";
import {IconType} from "../../const";

const Modal = ({isActive, isMobile, animation, onClose, onError, onAnimation}) => {

  return (
    <Fragment>
      {isActive && <section className="modal">
        <h2 className="visually-hidden">Вход в интернет-банк</h2>
        <div className={`modal__window ${animation.fadein ? `modal__window--fade-in` : ``} ${animation.shake ? `modal__window--shake` : ``}`} 
        onAnimationEnd={onAnimation}>
          <div className="modal__header">
            <img src="svg/modal_logo.svg" width="151" height="31" alt="Логотип интернет-банка Лига Банка"/>
            <button type="button" className="modal__close" aria-label="Закрыть окно" onClick={onClose}>
              {isMobile? <Icon icon={IconType.CLOSE_MOBILE} /> : <Icon icon={IconType.CLOSE} />}
            </button>
          </div>
          <ModalForm onSubmitForm={onClose} onSubmitError={onError} />
        </div>
      </section>
      }
    </Fragment>
  );
};

Modal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool,
  animation: PropTypes.shape({
    fadein: PropTypes.bool.isRequired,
    shake: PropTypes.bool.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  onAnimation: PropTypes.func.isRequired,
};

export default Modal;
