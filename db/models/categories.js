const mongoose = require('mongoose');

module.exports = mongoose.model('Categories', new mongoose.Schema({
    men:{ //this domain should be given number between 1-99
        caps: Number,  
        clothing:{   //this domain should be given number between 10-29 
            t_shirts: Number,
            shirts: Number,
            hoodies: Number,
            sweaters: Number,
            jackets_coats: Number,
            jeans: Number,
            pants: Number,
            shorts: Number,
            suits: Number,
            sportswear: Number,
            underwear: Number
        },
        shoes:{ //this domain should be given number between 30-49 
            athletic: Number,
            boots: Number,
            sneakers: Number,
            loafers_slip_ons: Number,
            oxfords: Number,
            classics: Number
        },
        accessories:{ //this domain should be given number between 50-69 
            belts: Number,
            watches: Number,
            cosmetics: {
                perfumes: Number,
                deodarants: Number,
                skin_care: Number,
                before_shave: Number,
                after_shave: Number
            },
        }
    },
    women:{ //this domain should be given number between 100-199
        caps: Number,
        clothing: { //this domain should be given number between 110-129
            dresses: Number,
            tees_blouses: Number,
            sweaters: Number,
            hoodies: Number,
            skirts: Number,
            jeans: Number,
            pants: Number, 
            shorts: Number,
            coats_vests: Number,
            suits_blazers: Number
        },
        shoes:{ //this domain should be given number between 130-149
            pumps: Number,
            athletic: Number,
            boots: Number,
            sneakers: Number,
            flats: Number,
            loafers_slip_ons: Number,
            oxfords: Number,
        },
        accessories: { //this domain should be given number between 150-169
            handbags: Number,
            belts: Number,
            beauty: {
                perfumes: Number,
                skincare: Number,
                makeup: Number 
            }
        }
    },
    // kids:{ //this domain should be given number between 200-299
    //     baby_boy: { //this domain should be given number between 200-249
    //         clothing: { //this domain should be given number between 200-229
    //             t_shirts: Number,
    //             shirts: Number,
    //             hoodies: Number,
    //             sweaters: Number,
    //             jackets_coats: Number,
    //             jeans: Number,
    //             pants: Number,
    //             shorts: Number,
    //             suits: Number,
    //             sportswear: Number,
    //             underwear: Number
    //         }
    //     },
    //     baby_girl: { //this domain should be given number between 250-299
    //         clothing: {//this domain should be given number between 250-279
    //             dresses: Number,
    //             tees_blouses: Number,
    //             sweaters: Number,
    //             hoodies: Number,
    //             skirts: Number,
    //             jeans: Number,
    //             pants: Number, 
    //             shorts: Number,
    //             coats_vests: Number,
    //             suits_blazers: Number
    //         }
    //     }
    // }
}));
