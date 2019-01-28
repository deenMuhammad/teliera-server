const mongoose = require('mongoose');

module.exports = mongoose.model('Order', new mongoose.Schema({
    customer_id: String,
    product_id: String,
    status: Number,
    shipping_adress: String,
    phone: String,
    payment_type: String,
    item: {
        color: String,
        size: Number,
        count: Number
    },
    date_ordered: Number
}));