const mongoose = require('mongoose');
module.exports = mongoose.model('Product', new mongoose.Schema({
    name: String,
    Price: Number,
    Category: Number,
    Stock: [{
        color: String,
        size: Number,
        count: Number
        },
    ],
    shop: String,
    short_desc: String,
    long_desc: String,
    discount: Number,
    hot: Boolean,
    images:[
        String
    ],
    date_added: Number,
    approved: Number,
    loves: Number //purpose of this loves field is to give rank to a particular product over another and give suggestions based on this to users
}));
