type translataionContainer = {
  [key: string]: {
    [key: string]: string;
  };
};
const indexTrans: translataionContainer = {
  // localization button in login page
  langs: {
    en: 'ع',
    ar: 'E',
  },

  /////////////////////////////< NavBar >/////////////////////////////////////////////
  login: {
    en: 'Login',
    ar: 'تسجيل الدخول',
  },
  search: {
    en: 'Search',
    ar: 'بحث',
  },
  tablebook: {
    en: 'Table Book',
    ar: 'كتاب الجدول',
  },
  contact: {
    en: 'Contact us',
    ar: 'تواصل معنا',
  },
  aboutus: {
    en: 'About us',
    ar: 'عن الموقع',
  },
  home: {
    en: 'Home',
    ar: 'الرئيسية',
  },
  /////////////////////////////< NavBar >/////////////////////////////////////////////
};

export default indexTrans;
