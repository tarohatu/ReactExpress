var express = require('express')
var userRouter = require('./users')
var locationRouter = require('./location')
var router = express.Router()

router.use('/user', userRouter)
router.use('/location', locationRouter)

module.exports = router
