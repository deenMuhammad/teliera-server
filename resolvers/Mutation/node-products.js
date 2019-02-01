const products = require('./../../nodes/product')

const addProduct = async (obj, {name, Price, Category, Stock, short_desc, long_desc, discount, hot, images}, ctx)=>{
    const result = await products.addProduct({name, Price, Category, Stock, short_desc, long_desc, discount, hot, images}, ctx);
    if(!result){
        return false;
    }
    return result;
}

const deleteProduct = async (obj, {id}, ctx)=>{
    const result = await products.deleteProduct({id}, ctx);
    if(!result){
        return false;
    }
    return result;
}

const approveProduct = async (obj, {id}, ctx)=>{
    const result = await products.approveProduct(id, ctx);
    if(result===null){
        throw new Error('superAdminTokenFailed');
    }
    if(!result){
        return false;
    }
    return true;
}
const DisapproveProduct = async (obj, {id}, ctx)=>{
    const result = await products.DisapproveProduct(id, ctx);
    if(result===null){
        throw new Error('superAdminTokenFailed');
    }
    if(!result){
        return false;
    }
    return true;
}
const makeProductItemSoldOut = async (obj, {id, item_id}, ctx)=>{
    var result = await products.makeProductItemSoldOut(id, item_id, ctx);
    if(!result){
        return false
    }
    return true
}
const makeOnSaleAgain = async (obj, {id, item_id, count}, ctx)=>{
    var result = await products.makeOnSaleAgain(id, item_id,count, ctx);
    if(!result){
        return false
    }
    return true
}
module.exports = {
    addProduct,
    approveProduct,
    deleteProduct,
    DisapproveProduct,
    makeProductItemSoldOut,
    makeOnSaleAgain
}