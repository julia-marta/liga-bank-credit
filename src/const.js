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
    name: `Ипотечное кредитование`
  },
  AUTO: {
    type: `auto`,
    name: `Автомобильное кредитование`
  }
};

export const IconType = {
  CLOSE: {
    name: `close`,
    width: 18,
    height: 18,
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

export const LoginInput = {
  LOGIN: `login`,
  PASSWORD: `password`
};
