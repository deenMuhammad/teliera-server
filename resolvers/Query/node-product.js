const products = require('../../nodes/product')

const oneProduct = async (obj, {_id}, ctx)=>{
    const product = await products.getProduct(_id);
    if(!product){
        return null;
    }
    return product;
}

const getHotProductBatch = async (obj, {pageSize, next}, ctx)=>{
    const result = await products.getHotProductBatch(pageSize, next);
    if(!result){
        return null;
    }
    return result;
}
const getDisapprovedProductBatch = async (obj, {pageSize, next}, ctx)=>{
    const result = await products.getDisapprovedProductBatch(pageSize, next);
    if(!result){
        return null;
    }
    return result;
}
const getApprovedProductBatch = async (obj, {pageSize, next}, ctx)=>{
    const result = await products.getApprovedProductBatch(pageSize, next);
    if(!result){
        return null;
    }
    return result;
}
const getApprovedProductBatchAsAdmin = async (obj, {pageSize, next}, ctx)=>{
    const result = await products.getApprovedProductBatchAsAdmin({pageSize, next}, ctx);
    if(!result){
        return null;
    }
    return result;
}
const getDisapprovedProductBatchAsAdmin = async (obj, {pageSize, next}, ctx)=>{
    const result = await products.getDisapprovedProductBatchAsAdmin({pageSize, next}, ctx);
    if(!result){
        return null;
    }
    return result;
}
const getPendingProductBatchAsAdmin = async (obj, {pageSize, next}, ctx)=>{
    const result = await products.getPendingProductBatchAsAdmin({pageSize, next}, ctx);
    if(!result){
        return null;
    }
    return result;
}
const getPendingProductBatch = async (obj, {pageSize, next}, ctx)=>{
    const result = await products.getPendingProductBatch(pageSize, next);
    if(!result){
        return null;
    }
    return result;
}
const getSaleProductBatch = async (obj, {pageSize, next}, ctx)=>{
    const result = await products.getSaleProductBatch(pageSize, next);
    if(!result){
        return null;
    }
    return result;
}

const getProductBatchByCategory = async (obj, {pageSize, next, category}) =>{
    const result = await products.getProductBatchByCategory(pageSize, next, category);
    if(!result){
        return null;
    }
    return result;
}

module.exports = {
    oneProduct,
    getHotProductBatch,
    getSaleProductBatch,
    getDisapprovedProductBatch,
    getPendingProductBatch,
    getApprovedProductBatchAsAdmin,
    getDisapprovedProductBatchAsAdmin,
    getPendingProductBatchAsAdmin,
    getApprovedProductBatch,
    getProductBatchByCategory
}