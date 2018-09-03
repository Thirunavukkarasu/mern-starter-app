const Router = require('express-promise-router')
const controller = require('../controllers/framework')

const router = Router({mergeParams: true})

module.exports = () => {
    router.route('/frameworks/list')
    .post(controller.listFramework)         

  return router
}