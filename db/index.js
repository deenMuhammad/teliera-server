const mongoose = require('mongoose');
const Product = require('./models/product');

var dbURI = "mongodb://deenmuhammad:+1587455Zorro@ds033255.mlab.com:33255/teliera";  //for online db
// var dbURI = "mongodb://myUserAdmin:abc123@192.168.0.18/teliera"; //using IP adress
mongoose.connect(dbURI, { useNewUrlParser: true })
mongoose.connection.on('connected', ()=>{
    console.log("Connected to Database");
});
mongoose.connection.on('error', (err)=>{
    throw new Error("Failed to Connect to Database "+err);
});
mongoose.connection.on('disconnected', (err)=>{
    throw new Error("Database Disconnected "+err);
});