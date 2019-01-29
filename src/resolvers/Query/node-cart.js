const carts = require('./../../nodes/cart')


const getCartProductBatch = async (obj, {pageSize, next}, ctx)=>{
    const cart = await carts.getCartProductBatch({pageSize, next}, ctx);
    if(!cart){
        throw new Error(`getBatchCartNull`)
    }
    return cart; 
}

module.exports = {
    getCartProductBatch
}