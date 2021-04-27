export const HEADER_MENU_ITEMS = [`Услуги`, `Рассчитать кредит`, `Конвертер валют`, `Контакты`];

export const FOOTER_MENU_ITEMS = [`Услуги`, `Рассчитать кредит`, `Контакты`, `Задать вопрос`];

export const SLIDES = [{
  index: 1,
  text: `Кредиты на любой случай`,
  button: {
    text: `Рассчитать кредит`,
    className: `button--light`,
    link: `calculator`
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
    link: `addresses`
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

export const IconType = {
  LOGIN: {
    name: `login`,
    width: 20,
    height: 22,
  },
  PASSWORD: {
    name: `password`,
    width: 22,
    height: 12,
  },
  CLOSE: {
    name: `close`,
    width: 18,
    height: 18,
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
  MOBILE: {
    name: `mobile-phone`,
    width: 10,
    height: 16,
  },
  PHONE: {
    name: `phone`,
    width: 16,
    height: 16,
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
