const express = require('express');
const router = express.Router();
const message = require('../controllers/index')
const shop = require('../controllers/shop')
const contact = require('../controllers/contact')
const newItem = require('../controllers/new_item')
const cart = require('../controllers/cart')

router.get('/',message.getMessage);
router.get('/shop',shop.getItems);
router.get('/contact',contact.getContacts)
router.get('/new_item',newItem.getForm)
router.post('/new_item',newItem.addItem)
router.get('/cart/:id',cart.addItem)
router.get('/cart/:id/add',cart.addItem)
router.get('/cart/:id/subtract',cart.subtractItem)
router.get('/cart/:id/remove',cart.removeItem)
router.get('/cart',cart.getItems)

module.exports = router;