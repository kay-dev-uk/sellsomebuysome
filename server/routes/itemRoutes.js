const express = require('express');
const itemController = require('../controllers/itemController');

const itemRoutes = express.Router();

itemRoutes.get('/all', itemController.getItems);
itemRoutes.post('/create_item', itemController.createItem);
itemRoutes.delete('/delete_item/:id', itemController.deleteItem);

module.exports = itemRoutes;
