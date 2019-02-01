const Order = require('./../db/models/order')
const users = require('./user')

const getOrdersBatch = async ({pageSize, next},ctx)=>{
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
    var result = Order.find({customer_id: user._id},{}, {skip: next-1, date_added: -1});//latest order is fetched first
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
        order: result
    }
}

module.exports = {
    getOrdersBatch
}