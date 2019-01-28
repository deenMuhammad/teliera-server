const mongoose = require('mongoose');
const Product = require('../models/product');
const Shop = require('../models/shop');
const User = require('./../models/user');
const Order = require('./../models/order');
const Cart = require('./../models/cart');
const Liked = require('./../models/liked');

var dbURI = "mongodb://<deenmuhammad>:<+1587455Zorro>@ds033255.mlab.com:33255/teliera"
mongoose.connect(dbURI, { useNewUrlParser: true })
mongoose.connection.on('connected', ()=>{
    console.log("Connected to Database");
    // var product = await await new Product({"images":["https://scene7.josbank.com/is/image/JosBank/33RH_01_TRAVELER_BLACK_MAIN?$browse_thumbnail$?$browse_thumbnail$","https://cdn.shopify.com/s/files/1/0971/6282/products/poly-white-1_787e6ea1-d717-4541-a01a-6a6476291b05.jpg?v=1541717455"],"name":"shim","Price":500000,"Category":2,"Stock":[{"color":"qora","size":50,"count":10},{"color":"oq","size":40,"count":11}],"shop":"Armor","short_desc":"chiroyli","long_desc":"Kostyum, 100% paxta","discount":10000,"hot":true,"__v":0}).save()
    // var shop = await new Shop({
    //     name: "Viqor",
    //     logo: "https://scontent-icn1-1.cdninstagram.com/vp/0342d826c27e2d89fbfd267e36715f98/5CC03900/t51.2885-19/s320x320/32233038_1729307940439292_2010632005535924224_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com",
    //     address: "140 магазин, Проспект Бунёдкор 52, ТРЦ Интегро, Чиланзар, Tashkent 100097, Uzbekistan",
    //     phone: "+998 71 200 53 00",
    //     username: "viqor.uz",
    //     password: "viqor.uz",
    //     sales: 100,
    //     rank: 1,
    //     account: ""
    // }).save();
    // var user = await new User({
    //     username: "deen@mail.ru",
    //     name: "Deen",
    //     password: "123",
    //     address: "somewhere",
    //     phone: "something"
    // }).save();
    // console.log(product);
    // console.log(shop);
    // console.log(user);
    // var order =  new Order({
    //         customer_id: "5c4995581aa03eb5a1f92eae",
    //         product_id: "5c481927bcd9a68225043149",
    //         status: 1,
    //         shipping_adress: "somewhere",
    //         phone: "something",
    //         payment_type: "some type",
    //         item: {
    //             color: "black",
    //             size: 40,
    //             count: 1
    //         }
    // }
    // ).save();
    // console.log(order);
    // Shop.updateMany({}, { $set: { date_opened: Date.now() }}, { new: true }, function (err, tank) {
    //     if (err) return handleError(err);
    //     console.log(tank)
    //   });
    // var cart = Cart({
    //     product_id: '5c48192dbcd9a6822504314b',
    //     customer_id: '5c49b1dca678b1b8da12d8ef',
    //     date_added: Date.now()
    // }).save();
    // var liked = Liked({
    //     product_id: '5c48612cee2ff0a39a7530d8',
    //     customer_id: '5c49b1dca678b1b8da12d8ef',
    //     date_added: Date.now()
    // }).save();
});
mongoose.connection.on('error', (err)=>{
    throw new Error("Failed to Connect to Databse "+err);
});
mongoose.connection.on('disconnected', (err)=>{
    throw new Error(err);
});