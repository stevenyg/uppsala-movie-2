const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController');

router.get('/users/:id', userController.getUserById)
router.get('/users', userController.getUser)

router.post('/users', userController.insertUser)
router.delete('/users/:id', userController.deleteUser)


module.exports = router