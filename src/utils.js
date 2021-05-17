export const parseNumberToString = (value) => {
  return value.toLocaleString();
}

export const parseFractionToString = (value) => {
  return value.toLocaleString(undefined, { minimumFractionDigits: 2});
}

export const formatString = (string) => {
  return string.replace(/\s/g, '');
}

export const isNumbersOnly = (value) => {
  return (/^[0-9 ]*$/.test(value));
}

export const validateFields = (fields) => {

  const errors = {}

  for (const key of Object.keys(fields)) {
    errors[key] = fields[key].length === 0
  }

  return errors;
};


export const getInitialFee = (propertyValue) => {
  return Math.round(propertyValue * 0.1);
}

export const getAnnuityPayment = (sum, rate, term) => {

  const monthRate = (rate / 100) / 12;
  const termInMonths = term * 12;

  const payment = (sum * monthRate) / (1 - (1 / Math.pow((1 + monthRate), termInMonths)));

  return Math.round(payment);
}

export const getMinIncome = (payment) => {
  return Math.round(payment * 100 / 45);
}

export const getInputSize = (stringValue, value) => {
    let size;

    switch (true) {
      case value > 999 && value <= 999999:
        size = stringValue.length - 1;
        break;
      case value > 999999:
        size = stringValue.length - 2;
        break;
      default:
        size = stringValue.length;
    }

    return size;
}

export const declineNumeral = (number, singular, genitive, plural) => {
  let form;

  switch (true) {
    case number === 11 || number === 12 || number === 13 || number === 14:
      form = plural;
      break;
    case number % 10 === 1:
      form = singular;
      break;
    case number % 10 === 2 || number % 10 === 3 || number % 10 === 4:
      form = genitive;
      break;
    default:
      form = plural;
  }
  return form;
};

