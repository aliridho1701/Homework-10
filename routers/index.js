const express = require('express')
const router = express.Router()
const userRouter = require('./user')
const gameRouter = require('./game')

router.use('/users', userRouter)
router.use('/game', gameRouter)

module.exports = router