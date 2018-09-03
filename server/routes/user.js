const Router = require('express-promise-router')
const User = require('../models/user')

const router = Router({ mergeParams: true })

module.exports = (passport) => {

    // Current logged in user
    router.route('/users/me').get( async(req, res) => {
      if (!req.session.passport) return res.json(null)

      const user = await User.findById(req.session.passport.user)
      return res.json(user)
    })

    // Setting the google oauth routes
    router.route('/auth/google').get(passport.authenticate('google', { scope: ['profile', 'email'] }))

    router.route('/auth/google/callback').get(passport.authenticate('google', {
      successRedirect: '/home',
      failureRedirect: '/'
    })
  )

  router.route('/auth/signout').get((req, res, next) => {
    req.logout()
    req.session.destroy(function() {
      res.redirect('/')
    })
  })

  return router
}