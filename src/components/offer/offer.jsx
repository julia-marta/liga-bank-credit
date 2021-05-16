import React, {Fragment, useEffect, useCallback} from 'react';
import PropTypes from "prop-types";
import {parseNumberToString, parseFractionToString, getAnnuityPayment, getMinIncome, declineNumeral} from "../../utils";
import {OFFER_ITEMS, MATERNAL_CAPITAL, Rate, MinCreditSum} from "../../const";

const Offer = ({propertyValue, initialFee, isMaternalCapital, creditTerm, purpose, onClickCheckout, onChangeData}) => {

    useEffect(() => {
      onChangeData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyValue, initialFee, creditTerm, isMaternalCapital, purpose]);

    const isRateLow = initialFee >= propertyValue * 0.15;

    const sum = propertyValue - initialFee - (isMaternalCapital ? MATERNAL_CAPITAL : 0);
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

Offer.propTypes = {
  propertyValue: PropTypes.number.isRequired,
  initialFee: PropTypes.number.isRequired,
  isMaternalCapital: PropTypes.bool.isRequired,
  creditTerm: PropTypes.number.isRequired,
  onClickCheckout: PropTypes.func.isRequired,
  onChangeData: PropTypes.func.isRequired,
}

export default Offer;
