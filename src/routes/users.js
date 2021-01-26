const router = require('koa-router')()
const controller = require('../controllers/users')


router.get('/users', controller.index)

module.exports = router