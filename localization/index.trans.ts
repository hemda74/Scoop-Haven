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
  //////////////< Titles >////////////////////
  CASCOTitle: {
    en: 'CASCO',
    ar: 'كاسكو',
  },
  /////////////////////////////< NavBar >/////////////////////////////////////////////
  AboutCascoNav: {
    en: 'ABOUT CASCO',
    ar: 'عن كاسكو',
  },
  DirectorMangerNav: {
    en: 'Managing Director',
    ar: 'المدير العام',
  },
  CareersNav: {
    en: 'CAREERS',
    ar: 'وظائف',
  },
  ServicesNav: {
    en: 'SERVICES',
    ar: 'الخدمات',
  },
  CoursesNav: {
    en: 'COURSES',
    ar: 'الكورسات',
  },
  industriesNav: {
    en: 'INDUSTRIES',
    ar: 'الصناعات',
  },
  ContactUsNav: {
    en: 'CONTACT US',
    ar: 'تواصل معنا ',
  },
  NewsNav: {
    en: 'NEWS & INSIGHTS',
    ar: 'الأخبار والرؤى',
  },
  /////////////////////////////< NavBar >/////////////////////////////////////////////
};

export default indexTrans;
