const passport = require('passport')
const googleStrategy = require('./strategies/google')
const config = require('../config')

module.exports = (passport) => {
   // Initialize strategies
   if (config.googleOAuth.clientId && config.googleOAuth.clientSecret) {
    googleStrategy(passport)
  } else if (process.env.NODE_ENV !== 'test') {
    console.warn()
    console.warn('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.warn('!!!  Google oauth API keys not set. Google login is disabled  !!!')
    console.warn('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.warn()
  }
}
