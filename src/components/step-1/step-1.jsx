import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import Icon from "../icon/icon";
import {IconType, CreditPurpose} from "../../const";

const Step1 = ({creditPurpose, changeCreditPurpose}) => {

  const [isSelectOpened, setSelectOpened] = useState(false);

  const handleSelectClick = useCallback(
    (evt) => {
        evt.preventDefault();
        setSelectOpened(!isSelectOpened);
    }, [isSelectOpened]
  );

  const handleSelectBlur = useCallback(
    (evt) => {
        evt.preventDefault();
        setSelectOpened(false);
    }, []
  );

  const handleSelectChange = useCallback(
    (evt) => {
        evt.preventDefault();
        changeCreditPurpose(evt.target.id);
        setSelectOpened(false);
    }, [changeCreditPurpose]
  );

  const selectedValue = creditPurpose ? CreditPurpose[creditPurpose.toUpperCase()].name : `Выберите цель кредита`;

  return (
    <div className="calculator__step calculator__step--1">
      <h3 className="calculator__title">Шаг 1. Цель кредита</h3>
       <div className="calculator__select-wrapper">
       <button className={`form__input calculator__select ${isSelectOpened ? `calculator__select--opened` : ``}`} onClick={handleSelectClick} onBlur={handleSelectBlur}>
         {selectedValue}
         <Icon icon={IconType.SELECT} />
       </button>
       {isSelectOpened && <ul className="calculator__option-list">
        {Object.keys(CreditPurpose).map((purpose, i) => (
          <li key={i + 1} id={CreditPurpose[purpose].type} className="form__input calculator__option"
            onMouseDown={(evt) => evt.preventDefault()} onClick={handleSelectChange}>
            {CreditPurpose[purpose].name}
          </li>
          ))}
       </ul>
      }
      </div>
    </div>
  );
};

Step1.propTypes = {
  creditPurpose: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]).isRequired,
  changeCreditPurpose: PropTypes.func.isRequired,
}

export default Step1;
