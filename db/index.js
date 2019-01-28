const mongoose = require('mongoose');
const Product = require('./models/product');

var dbURI = "mongodb://<deenmuhammad>:<+1587455Zorro>@ds033255.mlab.com:33255/teliera";
mongoose.connect(dbURI, { useNewUrlParser: true })
mongoose.connection.on('connected', ()=>{
    console.log("Connected to Database");
});
mongoose.connection.on('error', ()=>{
    throw new Error("Failed to Connect to Databse");
});
mongoose.connection.on('disconnected', ()=>{
    throw new Error("Databse Disconnected");
});