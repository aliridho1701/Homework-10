const express = require('express')
const router = express.Router()
const GameController = require('../controller/game_controller')

router.get('/', GameController.getAll)
router.get('/:id', GameController.getOne)
router.post('/', GameController.create)
router.put('/:id', GameController.update)
router.delete('/:id', GameController.delete)

module.exports = router