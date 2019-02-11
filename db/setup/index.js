const mongoose = require('mongoose');
const Product = require('../models/product');
// const Shop = require('../models/shop');
// const User = require('./../models/user');
// const Order = require('./../models/order');
// const Cart = require('./../models/cart');
// const Liked = require('./../models/liked');
// const SuperAdmin = require('./../models/superadmin')
// const cryptoPassword = require('./../../services/passwordCrypto')
const Categories = require('./../models/categories')

var dbURI = "mongodb://deenmuhammad:+1587455Zorro@ds033255.mlab.com:33255/teliera"
// var dbURI = "mongodb://localhost/teliera"
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
    // var superadmin = SuperAdmin({
    //     username: 'deen@mail.ru',
    //     password: cryptoPassword('123')
    // }).save();
    // var cat = Categories({
    //     men:{ //this domain should be given number between 0-99
    //         caps: 0,  
    //         clothing:{   //this domain should be given number between 10-29 
    //             t_shirts: 10,
    //             shirts: 11,
    //             hoodies: 12,
    //             sweaters: 13,
    //             jackets_coats: 14,
    //             jeans: 15,
    //             pants: 16,
    //             shorts: 17,
    //             suits: 18,
    //             sportswear: 19,
    //             underwear: 20
    //         },
    //         shoes:{ //this domain should be given number between 30-49 
    //             athletic: 30,
    //             boots: 31,
    //             sneakers: 32,
    //             loafers_slip_ons: 33,
    //             oxfords: 34,
    //             classics: 35
    //         },
    //         accessories:{ //this domain should be given number between 50-69 
    //             belts: 50,
    //             watches: 51,
    //             cosmetics: { //this domain should be given number between 60-69 
    //                 perfumes: 60,
    //                 deodarants: 61,
    //                 skin_care: 62,
    //                 before_shave: 63,
    //                 after_shave: 64
    //             },
    //         }
    //     },
    //     women:{ //this domain should be given number between 100-199
    //         caps: 100,
    //         clothing: { //this domain should be given number between 110-129
    //             dresses: 110,
    //             tees_blouses: 111,
    //             sweaters: 112,
    //             hoodies: 113,
    //             skirts: 114,
    //             jeans: 115,
    //             pants: 116, 
    //             shorts: 117,
    //             coats_vests: 118,
    //             suits_blazers: 119
    //         },
    //         shoes:{ //this domain should be given number between 130-149
    //             pumps: 130,
    //             athletic: 131,
    //             boots: 132,
    //             sneakers: 133,
    //             flats: 134,
    //             loafers_slip_ons: 135,
    //             oxfords: 136,
    //         },
    //         accessories: { //this domain should be given number between 150-169
    //             handbags: 150,
    //             belts: 151,
    //             beauty: {//this domain should be given number between 160-169
    //                 perfumes: 160,
    //                 skincare: 161,
    //                 makeup: 162 
    //             }
    //         }
    //     },
        // kids:{ //this domain should be given number between 200-299
        //     baby_boy: { //this domain should be given number between 200-249
        //         clothing: { //this domain should be given number between 200-229
        //             t_shirts: 200,
        //             shirts: 201,
        //             hoodies: 202,
        //             sweaters: 203,
        //             jackets_coats: 204,
        //             jeans: 205,
        //             pants: 206,
        //             shorts: 207,
        //             suits: 208,
        //             sportswear: 209,
        //             underwear: 210
        //         }
        //     },
        //     baby_girl: { //this domain should be given number between 250-299
        //         clothing: {//this domain should be given number between 250-279
        //             dresses: 250,
        //             tees_blouses: 251,
        //             sweaters: 252,
        //             hoodies: 253,
        //             skirts: 254,
        //             jeans: 255,
        //             pants: 256, 
        //             shorts: 257,
        //             coats_vests: 258,
        //             suits_blazers: 259
        //         }
        //     }
        // }
    // }).save()
    // console.log(cat);

    // var products = Product.insertMany([
    //     {
    //         name: "VBIGER 2-Pieces Winter Beanie Hat Scarf Set Warm Knit Hat Thick Knit Skull Cap for Men",
    //         Price: 20000,
    //         Category: 0,
    //         Stock: [{
    //             color: 'black',
    //             size: 7,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `Acrylic knit & fleece lining
    //         Please Note: all our 2018 new products are upgraded with better quality and correct logo words. All the Items are original brand and original photos.`,
    //         long_desc: `Made of thicker and cozy acrylic knit, with soft fleecy lining, super comfortable and warm.Soft fleece lining, has better heat retention, enjoy the maximum warmth.
    //         Delicate sewing thread, provide the added durability.
    //         Unisex, stretchy and elastic, One Size fits most men and women. Size information: Hat Circumference: 22-23.6"(56-60cm), Height: 10.2"(26cm); Circle Scarf Circumference:19.7-27.6"(50-70cm), Height: 8.7"(22cm).
    //         2-in-1 winter accessories, you can use this multi-function beanie hat and scarf set together or separately as you will. It will keep your head, ears, face and neck warm. Stay warm all the time, great for outdoor activities and daily warmer.`,
    //         discount: 1000,
    //         hot: true,
    //         images:[
    //             "https://images-na.ssl-images-amazon.com/images/I/51ublWA5cRL._AC_SR160,200_.jpg",
    //             "https://images-na.ssl-images-amazon.com/images/I/51jMFd2eXzL._AC_SR320,400_.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "Smoke Cigars Smoker Shirt - Ideal Clever Class Men Gift",
    //         Price: 39900,
    //         Category: 10,
    //         Stock: [{
    //             color: 'grey',
    //             size: 20,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `Solid colors: 100% Cotton; Heather Grey: 90% Cotton, 10% Polyester; All Other Heathers: 50% Cotton, 50% Polyester`,
    //         long_desc: `Imported
    //         Machine wash cold with like colors, dry low heat
    //         Cool That's What I Do I Smoke Cigars and I Know Things shirt. You like to smoke a good cigar or cigarette? This is perfect for you to wear at a bar, club party, tavern or just at Father's Day home during a drink with your friends, family, father or mother.
    //         Looking for a cool dad birthday gift or Christmas present? This class men and women tee is perfect for every colleague who's into scotch and cigars. Buy this shirt and enjoy your cigar and whisky even more in cold winter evenings in front of the fireplace.
    //         Lightweight, Classic fit, Double-needle sleeve and bottom hem`,
    //         discount: 3000,
    //         hot: true,
    //         images:[
    //             "https://images-na.ssl-images-amazon.com/images/I/41sRVL06MNL._AC_SR320,400_.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "Hanes Men's Long-Sleeve Beefy Henley T-Shirt",
    //         Price: 39900,
    //         Category: 11,
    //         Stock: [{
    //             color: 'black',
    //             size: 20,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `100% Cotton; Heather: 75% Cotton/25% Polyester`,
    //         long_desc: `Imported
    //         Machine Wash
    //         Tag-free for itch-free comfort
    //         Henley sports a three-button placket.
    //         Soft, pure cotton feels terrific all day long.
    //         Traditional set-in sleeves for solids; raglan sleeves for colorblocks.`,
    //         discount: 2000,
    //         hot: true,
    //         images:[
    //             "https://images-na.ssl-images-amazon.com/images/I/41LBcRjyZtL._AC_US320_FMwebp_QL65_.jpg",
    //             "https://images-na.ssl-images-amazon.com/images/I/81c4w4Wk%2BML._AC_UL480_SR393,480_.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "Carhartt Men's Signature Sleeve Logo Midweight Hooded Sweatshirt K288",
    //         Price: 49900,
    //         Category: 12,
    //         Stock: [{
    //             color: 'blue',
    //             size: 20,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `50% Cotton/50% Polyester`,
    //         long_desc: `Imported
    //         Machine Wash
    //         Hooded sweatshirt in midweight cotton/poly blend featuring logo at sleeve and kangaroo pocket
    //         Adjustable drawstring on hood
    //         Stretchable, spandex-reinforced rib-knit cuffs and waistband
    //         Carhartt-strong triple-stitched main seams`,
    //         discount: 0,
    //         hot: true,
    //         images:[
    //             "https://images-na.ssl-images-amazon.com/images/I/41q7+q5JorL._AC_US320_FMwebp_QL65_.jpg",
    //             "https://m.media-amazon.com/images/S/aplus-media/vc/1bfbf60d-f1d4-42f7-9b41-064c56b10871._CR0,0,150,400_PT0_SX150__.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "H2H Mens Casual Slim Fit Knitted Thermal Turtleneck Pullover Sweaters Basic Designed",
    //         Price: 49900,
    //         Category: 13,
    //         Stock: [{
    //             color: 'black',
    //             size: 23,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `95% POLYESTER / 5% SPANDEX`,
    //         long_desc: `Made in korea
    //         Pull On closure
    //         Style No. #KMTTL028, #KMTTL0412 , #KMTTL0410
    //         Slim fit, suitable for casual wear. / Various colors, lightweight and modern basic designed pullover sweaters for cold weather.
    //         Suitable for outdoor activity, party everyday fashion. Easy build-up your smart causal fashion with a causal jeans.
    //         Please use our size chart before ordering . Choose larger sizes if your size are same as the flat measurement Size Chart.
    //         Garment Care: Hand wash recommended, Hang/Line Dry (Do Not Use Heat Machine).`,
    //         discount: 10000,
    //         hot: true,
    //         images:[
    //             "https://images-na.ssl-images-amazon.com/images/I/61IpNYU76CL._AC_UL480_SR366,480_.jpg",
    //             "https://images-na.ssl-images-amazon.com/images/I/61IZe4ZGkPL._AC_UL320_SR320,320_.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "Wantdo Men's Mountain Waterproof Ski Jacket Windproof Rain Jacket",
    //         Price: 109900,
    //         Category: 14,
    //         Stock: [{
    //             color: 'black',
    //             size: 36,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `Warm Fabric: Professional water repellent coated, fuzzy lining and durable fabric with 2400 polyester fibre which guarantees the best heat retention. Relaxed-fit style with quick-dry material.`,
    //         long_desc: `Waterproof: Water-repellent rain jacket can work under over 10000mm pressure head. Keep your body always dry and comfortable when you are outside, also can fights bad rainy or misty weather.
    //         Windproof: 1) Adjustable cuffs, stretchable glove with thumb hole help seal in warmth. 2) Inside windproof snap powder skirt, internal drawcord hem, detachable and adjustable storm hood help to keep wind out. 3) Wear resisting soft shell is highly wind resistant.
    //         Multi Pockets: 2 zippered hand pockets, 1 zippered chest pocket (passport or cards stowed), 1 internal pocket, 1 internal secure media pocket. An earphone line fastening and supporting fixture available inside the jacket.
    //         Size notes: Jacket offers a standard fit. Please choose by US size.
    //         Best use: Downhill Skiing, Snowboarding, Snowsports and other winter outdoor sports.`,
    //         discount: 5000,
    //         hot: true,
    //         images:[
    //             "https://images-na.ssl-images-amazon.com/images/I/418Y6UC9OAL._AC_SR320,400_.jpg",
    //             "https://images-na.ssl-images-amazon.com/images/I/81RR-QWEPDL._UX679_.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "ASPOP Jeans Men's Stretch Cotton Slim-Fit Jean",
    //         Price: 79900,
    //         Category: 15,
    //         Stock: [{
    //             color: 'charcoal',
    //             size: 36,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `98% Cotton, 2% Elastane`,
    //         long_desc: `Imported
    //         Machine wash
    //         Slim-fit jean in stretch denim featuring slightly tapered leg, five-pocket styling, and contrast stitching
    //         Seamed rear pockets Zip fly with button closure`,
    //         discount: 1000,
    //         hot: true,
    //         images:[
    //             "https://images-na.ssl-images-amazon.com/images/I/81K2qDRFlHL._UY879_.jpg",
    //             "https://images-na.ssl-images-amazon.com/images/I/81PVnGJ-qVL._UY879_.jpg",
    //             "https://images-na.ssl-images-amazon.com/images/I/81TxJQ-QjVL._UY879_.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "Carhartt Men's Relaxed-Fit Washed Twill Dungaree Pant",
    //         Price: 59900,
    //         Category: 16,
    //         Stock: [{
    //             color: 'khaki',
    //             size: 38,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `100% Cotton`,
    //         long_desc: `Imported
    //         Button closure
    //         Machine Wash
    //         Sits at the waist
    //         Relaxed seat and thigh
    //         Multiple tool and utility pockets with left-leg hammer loop
    //         Straight leg opening`,
    //         discount: 0,
    //         hot: true,
    //         images:[
    //             "https://images-na.ssl-images-amazon.com/images/I/81BEecUl5vL._UY879_.jpg",
    //             "https://images-na.ssl-images-amazon.com/images/I/81pf%2BgMXCfL._UY879_.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "Janmid Men's Linen Casual Classic Fit Short",
    //         Price: 29000,
    //         Category: 17,
    //         Stock: [{
    //             color: 'white',
    //             size: 28,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `Material: Cotton & Linen
    //         Elastic waistband with adjustable internal drawstring for a custom fit
    //         `,
    //         long_desc: `Men's Casual & Comfortable Short Pants with Pockets, Perfect for Lesuire Outgoing Daily Wear, Summer Outfit, Beach Wear
    //         ONLY ITEMS SOLD BY Janmid ARE AUTHENTIC,BEWARE OF COUNTERFEIT SELLERS,Thanks.
    //         Hand Wash in Cold Water and Separately, Please choose ONE Size Small than casual size, or you could adjust the straps to fit your size, thanks.
    //         `,
    //         discount: 2000,
    //         hot: true,
    //         images:[
    //             "https://images-na.ssl-images-amazon.com/images/I/61DO%2B30bNkL._UX679_.jpg",
    //             "https://images-na.ssl-images-amazon.com/images/I/71JW9BpBu5L._UX679_.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "MAGE MALE Men's 3 Pieces Suit Elegant Solid One Button Slim Fit Single Breasted Party Blazer Vest Pants Set",
    //         Price: 429000,
    //         Category: 18,
    //         Stock: [{
    //             color: 'black',
    //             size: 38,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `Cotton polyester blended`,
    //         long_desc: `❀There is another seller who sell the suit under our listing page,but according to the feedback in his store, he never shipped the orders, please be caution about to this !!!❤❤❤We have update some of the suit details according to customer's feedback, Please note that MAGE MALE Store sold this suit exclusively. ❀
    //         Jackets: One Button Closure,Single Breasted,Notch Lapel;Vests:Four Button V-Neck Vest with Adjustable Back Tie;Pants:Flat Front Pants ,Zippered Fly With Buttoned Waist Tab
    //         This Suit is Suitable for Many Occasions,Like Wedding, Daily Life, Business, Meeting, Prom, Party, Graduation, Holiday and ect. It is Also a Prefect Fit for Your Father, Brother and Son.
    //         Care Instruction:Dry Clean Recommended;Low Iron before you wear it If Necessary ; Hang On the Suit When You Do Not Wear It
    //         To Ensure Your Best fit,Please Refer to Our Size Chart in the Left Product Image Column,This Suit is a Little Slim Fit,Please Order One or Two Size Larger than Usual`,
    //         discount: 10000,
    //         hot: true,
    //         images:[
    //             "https://images-na.ssl-images-amazon.com/images/I/41XKvOIvBbL._AC_US320_FMwebp_QL65_.jpg",
    //             "https://images-na.ssl-images-amazon.com/images/I/71l2%2B6%2BW4wL._UX679_.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "Adidas Men's Soccer Tiro 17 Training Pants",
    //         Price: 49900,
    //         Category: 19,
    //         Stock: [{
    //             color: 'black',
    //             size: 32,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `100% Polyester Doubleknit`,
    //         long_desc: `Imported
    //         Ventilated climacool keeps you cool and dry. Care instructions - Machine wash warm and Tumble dry low heat.Do not use fabric softener. Do not bleach and do not dry clean
    //         30" inseam (size Medium); slim fit
    //         Drawcord on elastic waist; mesh insert below back waist
    //         Front zip pockets. Tonal 3-Stripes on sides
    //         Ribbing on lower legs`,
    //         discount: 1000,
    //         hot: true,
    //         images:[
    //             "https://images-na.ssl-images-amazon.com/images/I/41mZYB0r3eL._AC_US320_FMwebp_QL65_.jpg",
    //             "https://images-na.ssl-images-amazon.com/images/I/41ZWwdWQXmL._SX679_.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "TSLA Men's Microfiber Top & Bottom Pack MHS100 / 2 Bottom Pack MHB101",
    //         Price: 29900,
    //         Category: 20,
    //         Stock: [{
    //             color: 'black',
    //             size: 32,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `Please order one size up for a more comfortable fit`,
    //         long_desc: `Excellent mobility and moisture wicking. Heatfit design
    //         Four-way stretch for unrestricted movement.
    //         2 pcs Fleece Lined Set (Top & Bottom).
    //         92% Ultra Soft Microfiber, 8% Spandex.`,
    //         discount: 0,
    //         hot: true,
    //         images:[
    //             "https://images-na.ssl-images-amazon.com/images/I/619nMrqCz8L._SX679_.jpg",
    //             "https://images-na.ssl-images-amazon.com/images/I/61Oy%2B9s06NL._SX679_.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "Nike Men's Lunar Fingertrap Cross Trainer",
    //         Price: 479900,
    //         Category: 30,
    //         Stock: [{
    //             color: 'red',
    //             size: 40,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `Textile and Synthetic. 
    //         Imported`,
    //         long_desc: `Rubber sole
    //         Shaft measures approximately low-top from arch
    //         Dynamic Fit technology provides a glove-like feel
    //         Solid rubber outsole for non-marking grip and traction
    //         Full inner sleeve construction made of lightweight, breathable mesh provides a sock-like fit that hugs the foot, but still allows for easy on and off`,
    //         discount: 10000,
    //         hot: true,
    //         images:[
    //             "https://images-na.ssl-images-amazon.com/images/I/81F-ZUuQSdL._UX695_.jpg",
    //             "https://images-na.ssl-images-amazon.com/images/I/71MrYkzY9ZL._UY695_.jpg",
    //             "https://images-na.ssl-images-amazon.com/images/I/8151VXfPiIL._UY695_.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "Columbia Men's Bugaboot Plus Iv Omni-Heat Mid Calf Boot",
    //         Price: 579900,
    //         Category: 31,
    //         Stock: [{
    //             color: 'black',
    //             size: 44,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `Leather and Textile
    //         Imported
    //         Rubber sole`,
    //         long_desc: `Shaft measures approximately 7" from arch
    //         Platform measures approximately 0.5 inches
    //         Techlite lightweight midsole for long lasting comfort, superior cushioning, and high energy return
    //         Combination of leather, nylon, webbing and metal hardware. Techlite shell. Waterproof seam-sealed construction. Omni-Heat reflective lining. 200g insulation. Rated -25F/-32C
    //         Michelin WINTER COMPOUND. Cold Temperature firm grip to -30 DegreeC/-22 DegreeF. Anti-slip rubber, good abrasion resistance.
    //         `,
    //         discount: 15000,
    //         hot: true,
    //         images:[
    //             "https://images-na.ssl-images-amazon.com/images/I/81K4CglHaML._UX695_.jpg",
    //             "https://images-na.ssl-images-amazon.com/images/I/81%2BgE8fRGKL._UX695_.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "NIKE Men's Tanjun Sneakers, Breathable Textile Uppers and Comfortable Lightweight Cushioning",
    //         Price: 309900,
    //         Category: 32,
    //         Stock: [{
    //             color: 'red',
    //             size: 40,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `100% Synthetic
    //         Rubber sole`,
    //         long_desc: `Breathable textile upper for lightweight comfort
    //         Foam midsole/outsole offers a lightweight cushioning
    //         Cushioned foam midsole and outsole unit absorbs impacting shock and delivers daylong comfort
    //         Midsoles are durable enough to serve as outsoles
    //         Injected unitsoles provide lightweight cushioning`,
    //         discount: 10000,
    //         hot: true,
    //         images:[
    //             "https://images-na.ssl-images-amazon.com/images/I/71AhKRcjl0L._UY695_.jpg",
    //             "https://images-na.ssl-images-amazon.com/images/I/71FHEyM71vL._UY695_.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "Skechers Men's Braver Rayland Slip-On Loafer",
    //         Price: 319900,
    //         Category: 33,
    //         Stock: [{
    //             color: 'brown',
    //             size: 40,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `100% Leather
    //         Imported`,
    //         long_desc: `Rubber sole
    //         Relax fit
    //         Memory foam
    //         Soft fabric shoe lining`,
    //         discount: 10000,
    //         hot: true,
    //         images:[
    //             "https://images-na.ssl-images-amazon.com/images/I/81riXeuasEL._UX695_.jpg",
    //             "https://images-na.ssl-images-amazon.com/images/I/81KcK17u%2BrL._UX695_.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "Stacy Adams Men's Dickinson Cap-Toe Lace-up Oxford",
    //         Price: 199900,
    //         Category: 34,
    //         Stock: [{
    //             color: 'cognac',
    //             size: 40,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `100% Leather
    //         Imported`,
    //         long_desc: `Non-Leather sole
    //         CLASSIC STYLE: Cap-toe oxford featuring burnished brogue perforated trims and blind-eyelet lacing
    //         COMFORT: Fully cushioned memory foam insole for superior padded cushy comfort and shock absorption
    //         DURABILITY: Lightweight construction with extended durability with breathable linings
    //         QUALITY SOLE: Flexible contrasting outsole with stitch detailing on low stacked heel
    //         `,
    //         discount: 5000,
    //         hot: true,
    //         images:[
    //             "https://images-na.ssl-images-amazon.com/images/I/81Xu%2BexN9hL._UX695_.jpg",
    //             "https://images-na.ssl-images-amazon.com/images/I/81RqPJlCiSL._UX695_.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "DREAM PAIRS Bruno Marc Moda Italy Men's Prince Classic Modern Oxford Wingtip Lace Dress Shoes",
    //         Price: 299900,
    //         Category: 35,
    //         Stock: [{
    //             color: 'brown',
    //             size: 42,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `man made material
    //         Designed in USA`,
    //         long_desc: `Wooden heel height: 1" (approx)
    //         Premium Faux Leather Lining, Latex Cushioned Footbed.
    //         Lace-up construction，Classic Brogue Wing Tip Design.
    //         Flexible and Comfort oxfords with ornamental perforated patterns`,
    //         discount: 5000,
    //         hot: true,
    //         images:[
    //             "https://images-na.ssl-images-amazon.com/images/I/61g3QBeDWAL._UX695_.jpg",
    //             "https://images-na.ssl-images-amazon.com/images/I/61gZVuKKjzL._UX695_.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "PACO RABANNE",
    //         Price: 200000,
    //         Category: 60,
    //         Stock: [{
    //             color: 'brown',
    //             size: 42,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `Composed by François Demachy, Dior Perfumer-Creator, and inspired by the magical hour of twilight, Sauvage Eau de Parfum adds depth to the face of Sauvage.`,
    //         long_desc: ``,
    //         discount: 2000,
    //         hot: true,
    //         images:[
    //             "https://www.theperfumeshop.com/medias/sys_master/front-prd/front-prd/10496593657886/Paco-Rabanne-Eau-de-Toilette-for-him-3349666007921-1-Million.jpg",
    //             "https://www.theperfumeshop.com/medias/sys_master/side-prd/side-prd/10496800653342/Paco-Rabanne-Eau-de-Toilette-for-him-3349666007921-1-Million.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "DIOR Souvage",
    //         Price: 200000,
    //         Category: 61,
    //         Stock: [{
    //             color: 'black',
    //             size: 42,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `- Distinct scent with a stand-out bottle to boot
    //         - Perfect for day-to-night wear
    //         - Best-selling scent`,
    //         long_desc: `TOP NOTESPeppermint, Blood Mandarin, Sparkling Fresh FruitsHEART NOTESRose, Musk, Cinnamon BASE NOTESAmber, Leather AccordLAUNCH DATE2008`,
    //         discount: 5000,
    //         hot: true,
    //         images:[
    //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbLP2g54U5OVNmDOLCVbpiVXpLvepYYmyNMHssUtwtpgBq122C"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "JACK BLACK the squad",
    //         Price: 30000,
    //         Category: 62,
    //         Stock: [{
    //             color: 'blue',
    //             size: 42,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `Which skin type is it good for? 
    //         ✔ Normal 
    //         ✔ Oily 
    //         ✔ Combination 
    //         ✔ Dry 
    //         ✔ Sensitive `,
    //         long_desc: `What it is: 
    //         A set of three Jack Black favorites, including multifunctional products designed to cleanse, hydrate, and protect your skin`,
    //         discount: 5000,
    //         hot: true,
    //         images:[
    //             "https://www.sephora.com/productimages/sku/s2070894-main-zoom.jpg",
    //             "https://www.sephora.com/productimages/product/p432638-av-01-zoom.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "Before shave",
    //         Price: 15000,
    //         Category: 63,
    //         Stock: [{
    //             color: 'blue',
    //             size: 42,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `Which skin type is it good for? 
    //         ✔ Normal 
    //         ✔ Oily 
    //         ✔ Combination 
    //         ✔ Dry 
    //         ✔ Sensitive `,
    //         long_desc: `What it is: 
    //         A set of three Jack Black favorites, including multifunctional products designed to cleanse, hydrate, and protect your skin`,
    //         discount: 500,
    //         hot: true,
    //         images:[
    //             "https://dsc-cms.imgix.net/v1/qpbrd0hcmuyw/HaOQYDiZQkgc8OmE6KwWM/1f679283684ff4a2276a2ca2b1142b15/ESB-6Z-CURRENT__1_.png?w=600&auto=format"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "Nivea after Shave",
    //         Price: 10000,
    //         Category: 64,
    //         Stock: [{
    //             color: 'blue',
    //             size: 42,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `Which skin type is it good for? 
    //         ✔ Normal 
    //         ✔ Oily 
    //         ✔ Combination 
    //         ✔ Dry 
    //         ✔ Sensitive `,
    //         long_desc: `What it is: 
    //         A set of three Jack Black favorites, including multifunctional products designed to cleanse, hydrate, and protect your skin`,
    //         discount: 0,
    //         hot: true,
    //         images:[
    //             "https://www.smallflower.com/prodimages/242105-DEFAULT-L.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "Marino’s Men Genuine Leather Dress Belt with Single Prong Buckle",
    //         Price: 20000,
    //         Category: 50,
    //         Stock: [{
    //             color: 'black',
    //             size: 32,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `HIGH QUALITY CRAFTMANSHIP. Marino’s genuine leather belts are highly constructed for a longer endurance and better upholding. HAND WASHABLE.`,
    //         long_desc: `VERSATILE. Ideal men accessory to wear as an everyday belt, goes great with uniform, jeans or formal wear.
    //         PRODUCT DIMENSIONS. Strap is 1 1/8" wide
    //         SINGLE PRONG BUCKLE. Are made with zinc alloy to create a substance with greater strength and resistance to corrosion.
    //         ORDER WITH GRACE. Marino’s swift exchange policy enables you to purchase without hesitation! 100% satisfaction guaranteed, 30 days’ free exchange and return policy.`,
    //         discount: 1000,
    //         hot: true,
    //         images:[
    //             "https://images-na.ssl-images-amazon.com/images/I/517nfnEk2CL._AC_US320_FMwebp_QL65_.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    //     {
    //         name: "Mens Watch Deep Blue/Black Ultra Thin Wrist Watches for Men Fashion Waterproof Dress Stainless Steel Band",
    //         Price: 100000,
    //         Category: 51,
    //         Stock: [{
    //             color: 'black',
    //             size: 32,
    //             count: 20
    //             },
    //         ],
    //         shop: '5c50fa2be7179a1e468519a9',
    //         short_desc: `Imported
    //         Minimalist watches design with a unique texture of dial. This classic simple gent's wrist watch will be greatly suitable for any occasion.`,
    //         long_desc: `Perfect watches for all kind of business, casual, indoor activities or daily use .
    //         ultrathin dial stainless steel strap quartz wrist watch for men
    //         Perfect for all kind of business, casual, indoor activities or daily use`,
    //         discount: 5000,
    //         hot: true,
    //         images:[
    //             "https://images-na.ssl-images-amazon.com/images/I/51UlsYj+0IL._AC_US320_FMwebp_QL65_.jpg"
    //         ],
    //         date_added: Date.now(),
    //         approved: 2, 
    //     },
    // ])
    // console.log(products);
    // Product.updateMany({}, { $set: { loves: 0 }}, { new: true }, function (err, product) {
    //         if (err) return handleError(err);
    //         console.log(product)
    //       });
});
mongoose.connection.on('error', ()=>{
    throw new Error("Failed to Connect to Databse");
});
mongoose.connection.on('disconnected', ()=>{
    throw new Error("Databse Disconnected");
});