export const HEADER_MENU_ITEMS = [`Услуги`, `Рассчитать кредит`, `Конвертер валют`, `Контакты`];

export const FOOTER_MENU_ITEMS = [`Услуги`, `Рассчитать кредит`, `Контакты`, `Задать вопрос`];

export const SLIDES = [{
  index: 1,
  text: `Кредиты на любой случай`,
  button: {
    text: `Рассчитать кредит`,
    className: `button--light`,
    link: `#calculator`
    }
  },
  {
  index: 2,
  text: `Ваша уверенность в завтрашнем дне`,
  },
  {
  index: 3,
  text: `Всегда рядом`,
  button: {
    text: `Найти отделение`,
    className: ``,
    link: `#branches`
  }
}];

export const SLIDER_INTERVAL = 4000;
export const SLIDER_TRANSLATE = window.innerWidth;
export const SLIDER_TRANSITION = 0.7;

export const OFFER_ITEMS = [{
  key: `sum`,
  label: `Сумма ипотеки`,
  currency: [`рубль`, `рубля`, `рублей`]
},
{
  key: `rate`,
  label: `Процентная ставка`,
},
{
  key: `payment`,
  label: `Ежемесячный платеж`,
  currency: [`рубль`, `рубля`, `рублей`]
},
{
  key: `income`,
  label: `Необходимый доход`,
  currency: [`рубль`, `рубля`, `рублей`]
}];

export const APPLICATION_ITEMS = [{
  key: `number`,
  label: `Номер заявки`,
},
{
  key: `purpose`,
  label: `Цель кредита`,
},
{
  key: `propertyValue`,
  label: {
    mortgage: `Стоимость недвижимости`,
    auto: `Стоимость автомобиля`
  },
  currency: [`рубль`, `рубля`, `рублей`]
},
{
  key: `initialFee`,
  label: `Первоначальный взнос`,
  currency: [`рубль`, `рубля`, `рублей`]
},
{
  key: `creditTerm`,
  label: `Срок кредитования`,
  currency: [`год`, `года`, `лет`],
}];

export const CONTACTS = [{
  type: `mobile`,
  number: `*0904`,
  description: `Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2`,
},
{
  type: `phone`,
  number: `8 800 111 22 33`,
  description: `Бесплатный для всех городов России`,
}];

export const SOCIAL_LINKS = [{
  type: `facebook`,
  label: `Фейсбук`,
},
{
  type: `instagram`,
  label: `Инстаграм`,
},
{
  type: `twitter`,
  label: `Твиттер`,
},
{
  type: `youtube`,
  label: `Ютуб`,
}];

export const Service = {
  DEPOSITS: {
    name: `Вклады`,
    title: `Вклады Лига Банка – это выгодная инвестиция в свое будущее`,
    features: [`Проценты по вкладам до 7%`, `Разнообразные условия`, `Возможность ежемесячной капитализации или вывод процентов на банковскую карту`],
    button: true,
  },
  CREDITS: {
    name: `Кредиты`,
    title: `Лига Банк выдает кредиты \n под любые цели`,
    features: [`Ипотечный кредит`, `Автокредит`, `Потребительский кредит`],
    subtitle: {
      text: `Рассчитайте ежемесячный платеж \n и ставку по кредиту воспользовавшись нашим`,
      link: `кредитным калькулятором`
    },
    button: false,
  },
  INSURANCE: {
    name: `Страхование`,
    title: `Лига Страхование — застрахуем все что захотите`,
    features: [`Автомобильное страхование`, `Страхование жизни и здоровья`, `Страхование недвижимости`],
    button: true,
  },
  ONLINE: {
    name: `Онлайн-сервисы`,
    title: `Лига Банк — это огромное количество онлайн-сервисов для вашего удобства`,
    features: [`Мобильный банк, \n который всегда под рукой`, `Приложение Лига-проездной позволит \n вам оплачивать билеты по всему миру`],
    button: true,
  }
};

export const SectionType = {
  CALCULATOR: {
    name: `calculator`,
    title: `Кредитный калькулятор`
  },
  BRANCHES: {
    name: `branches`,
    title: `Отделения Лига Банка`
  }
};

export const CreditPurpose = {
  MORTGAGE: {
    type: `mortgage`,
    name: `Ипотечное кредитование`,
    label: `Ипотека`
  },
  AUTO: {
    type: `auto`,
    name: `Автомобильное кредитование`,
    label: `Автокредит`
  }
};

export const IconType = {
  CHECKBOX: {
    name: `checkbox`,
    width: 8,
    height: 6,
  },
  CLOSE: {
    name: `close`,
    width: 18,
    height: 18,
  },
  CLOSE_MOBILE: {
    name: `close-mobile`,
    width: 14,
    height: 14,
  },
  CREDITS: {
    name: `credits`,
    width: 34,
    height: 30,
  },
  DEPOSITS: {
    name: `deposits`,
    width: 34,
    height: 33,
  },
  FACEBOOK: {
    name: `facebook`,
    width: 9,
    height: 16,
  },
  INSTAGRAM: {
    name: `instagram`,
    width: 16,
    height: 16,
  },
  INSURANCE: {
    name: `insurance`,
    width: 28,
    height: 34,
  },
  LOGIN: {
    name: `login`,
    width: 20,
    height: 22,
  },
  MOBILE: {
    name: `mobile-phone`,
    width: 10,
    height: 16,
  },
  ONLINE: {
    name: `online`,
    width: 20,
    height: 34,
  },
  PASSWORD: {
    name: `password`,
    width: 22,
    height: 12,
  },
  PHONE: {
    name: `phone`,
    width: 16,
    height: 16,
  },
  SELECT: {
    name: `select`,
    width: 18,
    height: 11,
  },
  TICK: {
    name: `tick`,
    width: 13,
    height: 10,
  },
  TWITTER: {
    name: `twitter`,
    width: 16,
    height: 13,
  },
  YOUTUBE: {
    name: `youtube`,
    width: 16,
    height: 13,
  }
};

export const Tab = {
  DEPOSITS: {
    index: 1,
    name: `deposits`,
  },
  CREDITS: {
    index: 2,
    name: `credits`,
  },
  INSURANCE: {
    index: 3,
    name: `insurance`,
  },
  ONLINE: {
    index: 4,
    name: `online`,
  }
};

export const Viewport = {
  MOBILE: {
    min: 320,
    max: 767,
  },
  TABLET: {
    min: 768,
    max: 1023
  }
};

export const Key = {
  ESC: `Esc`,
  ESCAPE: `Escape`
};

export const InputControl = {
  DECREASE: `decrease`,
  INCREASE: `increase`,
  STEP: 100000
};

export const ModalFormField = {
  LOGIN: {
    legend: `Ввод логина`,
    name: `login`,
  },
  PASSWORD: {
    legend: `Ввод пароля`,
    name: `password`,
  },
};

export const CalculatorStage = {
  ONE: {
    name: `one`,
    title: `Шаг 1. Цель кредита`
  },
  TWO: {
    name: `two`,
    title: `Шаг 2. Введите параметры кредита`
  },
  THREE: {
    name: `three`,
    title: `Шаг 3. Оформление заявки`
  },
};

export const CalculatorFormField = {
  SELECT: {
    legend: `Выбор типа кредита`,
    name: `select`,
    defaultValue: `Выберите цель кредита`
  },
  PROPERTY: {
    legend: `Ввод стоимости недвижимости`,
    name: `property`,
    label: `Стоимость недвижимости`,
    suffix: [`рубль`, `рубля`, `рублей`],
    min: 1200000,
    max: 25000000,
  },
  INITIAL_FEE: {
    legend: `Ввод первоначального взноса`,
    name: `initial`,
    label: `Первоначальный взнос`,
    suffix: [`рубль`, `рубля`, `рублей`],
  },
  CREDIT_TERM: {
    legend: `Ввод срока кредитования`,
    name: `term`,
    label: `Срок кредитования`,
    suffix: [`год`, `года`, `лет`],
    min: 5,
    max: 30,
  },
  MATERNAL_CAPITAL: {
    legend: `Использование материнского капитала`,
    name: `maternal`,
    label: `Использовать материнский капитал`,
  }
};

export const CalculatorApplicationFormField = {
  NAME: {
    legend: `Ввод ФИО`,
    name: `name`,
    placeholder: `ФИО`
  },
  PHONE: {
    legend: `Ввод телефона`,
    name: `phone`,
    placeholder: `Телефон`
  },
  EMAIL: {
    legend: `Ввод электронной почты'`,
    name: `email`,
    placeholder: `E-mail`
  },
};

export const Rate = {
  NORMAL: 9.40,
  LOW: 8.50,
};

export const MinCreditSum = {
  MORTGAGE: 500000,
  AUTO: 200000,
};

export const MATERNAL_CAPITAL = 470000;
