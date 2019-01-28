const mongoose = require('mongoose');

module.exports = mongoose.model('Liked', new mongoose.Schema({
    product_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
    customer_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    date_added: Number 
}));