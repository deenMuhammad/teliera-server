const mongoose = require('mongoose');

module.exports = mongoose.model('Shop', new mongoose.Schema({
    name: String,
    logo: String,
    address: String,
    phone: String,
    username: String,
    password: String,
    sales: Number,
    rank: Number,
    account: String,
    date_opened: Number,
}));