const mongoose = require('mongoose');

const schema = mongoose.Schema

const Cart = new schema({
    name: {type: String, required: true, maxLength: 100},
    price: {type: Number, required: true},
    manufactured_at: {type: Date},
    packaging_date: {type: Date},
    category: {type: String, required: true},
    image: {type: Object},
    quantity: {type: Number, default: 0}
});

module.exports = mongoose.model('Cart',Cart)