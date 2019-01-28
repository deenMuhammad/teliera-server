const order = require('./../../nodes/order')

const getOrdersBatch = async (obj, {pageSize, next}, ctx)=>{
    const orders = await order.getOrdersBatch({pageSize, next}, ctx);
    if(!orders){
        throw new Error(`getBatchOrderNull`)
    }
    return orders;
}

module.exports = {
    getOrdersBatch
}