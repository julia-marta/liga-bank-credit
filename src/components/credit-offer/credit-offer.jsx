import React, {Fragment, useCallback} from 'react';
import PropTypes from "prop-types";
import {parseNumberToString, parseFractionToString, getAnnuityPayment, getMinIncome, declineNumeral} from "../../utils";
import {OFFER_ITEMS, Rate, MinCreditSum} from "../../const";

const CreditOffer = ({propertyValue, initialFee, maternalCapital, creditTerm, onClickCheckout}) => {

    const isRateLow = initialFee >= propertyValue * 0.15;

    const sum = propertyValue - initialFee - maternalCapital;
    const rate = isRateLow ? Rate.LOW : Rate.NORMAL;
    const payment = getAnnuityPayment(sum, rate, creditTerm);
    const income = getMinIncome(payment);

    const isRejection = sum < MinCreditSum.MORTGAGE;

    const actualValues = {
      sum: parseNumberToString(sum),
      rate: parseFractionToString(rate),
      payment: parseNumberToString(payment),
      income: parseNumberToString(income),
    };

  const handleCheckoutButtonClick = useCallback(
    (evt) => {
      evt.preventDefault();
      onClickCheckout(true);
    }, [onClickCheckout]
  );

  return (
    <div className="calculator__offer offer">
      {!isRejection && <Fragment>
      <h3 className="offer__title">Наше предложение</h3>
      <ul className="offer__items">
        {OFFER_ITEMS.map((item, index) => {
          return <li key={index + 1} className="offer__item">
          <p className="offer__value">{actualValues[item.key]}{item.currency ? ` ${declineNumeral(actualValues[item.key], ...item.currency)}` : `%`}</p>
          <span className="offer__subtitle">{item.label}</span>
        </li>
        })}
      </ul>
      <button className="form__submit form__submit--checkout button" type="button" onClick={handleCheckoutButtonClick}>Оформить заявку</button>
    </Fragment>}
    {isRejection && <Fragment>
      <h3 className="offer__title">Наш банк не выдаёт ипотечные кредиты меньше 500 000 рублей.</h3>
      <p className="offer__rejection">Попробуйте использовать другие параметры для расчёта.</p>
      </Fragment>}
    </div>
  );
};

CreditOffer.propTypes = {
  propertyValue: PropTypes.number.isRequired,
  initialFee: PropTypes.number.isRequired,
  maternalCapital: PropTypes.number.isRequired,
  creditTerm: PropTypes.number.isRequired,
  onClickCheckout: PropTypes.func.isRequired,
}

export default CreditOffer;
