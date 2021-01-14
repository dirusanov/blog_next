//import blogConfig from './blogConfig'
blogConfig = require('./blogConfig');

module.exports = {
  i18n: {
    locales: blogConfig.locales,
    defaultLocale: blogConfig.defaultLocale,
  },
}
