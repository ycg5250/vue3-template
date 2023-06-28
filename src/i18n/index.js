import { createI18n } from 'vue-i18n';
import _ from "lodash";
import zh from './lang/zh';
import en from './lang/en';

const availableLocale = ['zh', 'en', 'ko', 'ja'];

let defaultLangStr = navigator.language;
let defaultLang = 'zh';

if (defaultLangStr.indexOf('en') >= 0) {
  defaultLang = 'en';
}

const query = location.search.substr(1);
let queryObj = {};

if (query) {
  _.forEach(query.split('&'), (item) => {
    const tempArr = item.split('=');
    queryObj[tempArr[0]] = tempArr[1];
  });
}

let locale = _.includes(availableLocale, queryObj['locale'])
  ? queryObj['locale']
  : defaultLang;

locale = localStorage.getItem('locale') || locale;

export default createI18n({
  legacy: false,
  locale: locale,
  messages: { en, zh },
});
