const mongoose = require('mongoose');

const schema = mongoose.Schema

const Item = new schema({
    name: {type: String, required: true, maxLength: 100},
    price: {type: Number, required: true},
    manufactured_at: {type: Date},
    packaging_date: {type: Date},
    category: {type: String, required: true},
    image: {type: Object}
});

module.exports = mongoose.model('Item',Item)