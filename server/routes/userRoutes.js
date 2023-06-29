const express = require('express');
const userController = require('../controllers/userController');

const userRoutes = express.Router();

userRoutes.get('/all', userController.getUsers);
userRoutes.post('/create_user', userController.createUser);
userRoutes.delete('/delete_user/:id', userController.deleteUser);

module.exports = userRoutes;
