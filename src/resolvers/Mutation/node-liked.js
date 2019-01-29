const liked = require('./../../nodes/liked')


const addToLiked = async (obj, {product_id}, ctx)=>{
    const result = await liked.addToLiked(product_id, ctx);
    if(!result){
        throw new Error(`addToLikedNull`)
    }
    return result; 
}

module.exports = {
    addToLiked
}