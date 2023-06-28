const express = require('express');
const userController = require('../controllers/userController');

const userRoutes = express.Router();

userRoutes.get('/users', userController.getUsers);
userRoutes.post('/create', userController.createUser);

module.exports = userRoutes;
