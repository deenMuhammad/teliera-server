const Shop = require('./../db/models/shop');
const Product = require('./../db/models/product') 
const products = require('./../nodes/product')
const superadmins = require('./superadmin')
const passwordCrypto = require('./../services/passwordCrypto')

const getShop = (_id)=>{
    const result = Shop.findById({_id: _id}).exec();
    return result;
}

const getShopBatch = async (pageSize, next)=>{
    var hasMore=true;
    var _next;
    var arr = [];
    var result = Shop.find({},{}, {skip: next-1, sort: {rank: 1}});   //revise skip condition for better performance because if you skip some of them inside an array some of the object will never show up
    arr = await result;
    let len  = arr.length;
    if(len>=pageSize){
        result = arr.slice(0, pageSize);
        if(len===pageSize){
            hasMore=false
        }
    }
    else{
        result = arr;
        hasMore=false;
    }
    //has to consider if the result array is empty
    if(result.length==0){
        result = null
    }
    else{
        var temp = [];
        for (let index = 0; index < result.length; index++) {
            const showcase = await products.getImageBatchWithShopID(4, result[index]._id);
            temp.push(
                {
                    showcase : showcase,
                    Shop: result[index]
                }
            );
        }
        result = temp;
    }
    _next = next+pageSize;
    return {
        hasMore: hasMore,
        next: _next,
        shops: result
    }
}

const getSingleShopProductBatch = async (_id, pageSize, next)=>{
    var hasMore=true;
    var _next;
    var arr = [];
    var result = Product.find({shop: _id},{}, {skip: next-1, sort: { 'date_added' : -1 }});//FETCHING THE NEWEST PRODUCT OF A SHOP FIRST
    arr = await result;
    let len  = arr.length;
    if(len>=pageSize){
        result = arr.slice(0, pageSize);
        if(len===pageSize){
            hasMore=false
        }
    }
    else{
        result = arr;
        hasMore=false;
    }
    _next = next+pageSize;
    return {
        hasMore: hasMore,
        next: _next,
        products: result
    }
}

const addShop = async ({name, logo, address, phone, username, password, account}, ctx)=>{
    //sales rank date_opened should be added
    if(await superadmins.verifySuperAdmin(ctx.headers.accessToken)){//token valid and the superAdmin is valid
        const userName = await Shop.findOne({username: username}).exec();
        if(userName){
            throw new Error(`usernameTaken`);
        }
        var newShop = await Shop({
            name: name,
            logo: logo,
            address: address,
            phone: phone,
            username: username,
            password: passwordCrypto(password),
            sales: 0,
            rank: 0,
            account: account,
            date_opened: Date.now()
        }).save()
        if(!newShop){
            throw new Error("addShopUpFailed");
        }
        else{
            return true;
        }
    }
    else{
        throw new Error('superAdminTokenFailed');
    }
}


module.exports = {
    getShop,
    getShopBatch,
    getSingleShopProductBatch,
    addShop
}
