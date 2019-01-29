const Liked = require('./../db/models/liked');
const users = require('./user')

const getLikedProductBatch = async ({pageSize, next},ctx)=>{
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
    var result = Liked.find({customer_id: user.user_id},{}, {skip: next-1, date_added: -1}).populate('product_id');
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
        liked: result
    }
}

const addToLiked = async (product_id, ctx)=>{
    if(ctx.headers.accessToken==null){
        throw new Error(`tokenFailed`);
    }
    const user = await users.verifyUser(ctx.headers.accessToken);
    if(!user){
        throw new Error(`tokenFailed`)
    }
    var inliked = await inLiked(product_id, user.user_id);
    if(inliked!=null){
        throw new Error("alreadyInLiked");
    }
    var result = Liked({
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

const inLiked = async (product_id, user_id)=>{
   return Liked.findOne({$and: [{product_id: product_id}, {customer_id: user_id}]}); //fetching products in cart according to product_id and custormer_id
}

module.exports = {
    getLikedProductBatch,
    addToLiked
}