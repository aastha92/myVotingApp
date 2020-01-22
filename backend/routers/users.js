const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()
const {authenticate} = require('../middleware/index');

router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
//router.post('/', usersController.createUser);

module.exports = router