export const parseNumberToString = (value) => {
  return value.toLocaleString();
}

export const formatString = (string) => {
  return string.replace(/\s/g, '');
}

export const isNumbersOnly = (value) => {
  return (/^[0-9 ]*$/.test(value));
}

export const getInitialFee = (propertyValue) => {
  return Math.floor(propertyValue * 0.1);
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

