const mongoose = require('mongoose');

module.exports = mongoose.model('SuperAdmin', new mongoose.Schema({
    username: String,
    password: String
}));