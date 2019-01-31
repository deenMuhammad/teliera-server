const products = require('../../nodes/product')

const oneProduct = async (obj, {_id}, headers)=>{
    const product = await products.getProduct(_id);
    if(!product){
        return null;
    }
    return product;
}

const getHotProductBatch = async (obj, {pageSize, next}, headers)=>{
    const result = await products.getHotProductBatch(pageSize, next);
    if(!result){
        return null;
    }
    return result;
}
const getUnapprovedProductBatch = async (obj, {pageSize, next}, headers)=>{
    const result = await products.getUnapproveProductBatch(pageSize, next);
    if(!result){
        return null;
    }
    return result;
}
const getSaleProductBatch = async (obj, {pageSize, next}, headers)=>{
    const result = await products.getSaleProductBatch(pageSize, next);
    if(!result){
        return null;
    }
    return result;
}

module.exports = {
    oneProduct,
    getHotProductBatch,
    getSaleProductBatch,
    getUnapprovedProductBatch
}