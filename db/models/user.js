const mongoose = require('mongoose');

module.exports = mongoose.model('User', new mongoose.Schema({
    username: String,
    name: String,
    password: String,
    address: String,
    phone: String,
    sign_up_date: Number
}));