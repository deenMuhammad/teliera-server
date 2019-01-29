const shop = require('./../../nodes/shop')

const getShop = async (obj, {_id}, headers)=>{
    const Shop = await shop.getShop(_id);
    if(!Shop){
        return Shop;
    }
    return Shop;
}
const getShopBatch = async (obj, {pageSize, next}, headers)=>{
    const result = await shop.getShopBatch(pageSize, next);
    if(!result){
        return null;
    }
    return result;
}
const getSingleShopProductBatch = async (obj, {_id, pageSize, next}, headers)=>{
    const result = await shop.getSingleShopProductBatch(_id, pageSize, next);
    if(!result){
        return null;
    }
    return result;
}
module.exports = {
    getShop,
    getShopBatch,
    getSingleShopProductBatch
}