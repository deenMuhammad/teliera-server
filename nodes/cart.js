const Cart = require('./../db/models/cart');
const users = require('./user')

const getCartProductBatch = async ({pageSize, next},ctx)=>{
    if(ctx.headers.accessToken==null){
        throw new Error(`tokenFailed`);
    }
    const user = await users.verifyUser(ctx.headers.accessToken);
    if(!user){
        throw new Error(`tokenFailed`)
    }
    var hasMore=true;
    var _next;
    var arr = [];
    var result = Cart.find({customer_id: user.user_id},{}, {skip: next-1, date_added: -1}).populate('product_id');
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
        cart: result
    }
}

const addToCart = async (product_id, ctx)=>{
    if(ctx.headers.accessToken==null){
        throw new Error(`tokenFailed`);
    }
    const user = await users.verifyUser(ctx.headers.accessToken);
    if(!user){
        throw new Error(`tokenFailed`)
    }
    var incart = await inCart(product_id, user.user_id);
    if(incart!=null){
        throw new Error("alreadyInCart");
    }
    var result = Cart({
        product_id: product_id,
        customer_id: user.user_id,
        date_added: Date.now()
    }).save()
    if(!result){
        return false;
    }
    else{
        return true;
    }
}

const inCart = async (product_id, user_id)=>{
   return Cart.findOne({$and: [{product_id: product_id}, {customer_id: user_id}]}); //fetching products in cart according to product_id and custormer_id
}

module.exports = {
    getCartProductBatch,
    addToCart
}