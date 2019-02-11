const carts = require('./../../nodes/cart')


const addToCart = async (obj, {product_id}, ctx)=>{
    const result = await carts.addToCart(product_id, ctx);
    if(!result){
        throw new Error(`addToCartNull`)
    }
    return result; 
}

const removeFromCart = async (obj, {product_id}, ctx)=>{
    const result = await carts.removeFromCart(product_id, ctx);
    if(!result){
        throw new Error(`removeFromCartNull`)
    }
    return result;    
}

module.exports = {
    addToCart,
    removeFromCart
}