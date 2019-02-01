const shop = require('./../../nodes/shop')

const addShop = async (obj, {name, logo, address, phone, username, password, account}, ctx)=>{
    const result = await shop.addShop({name, logo, address, phone, username, password, account}, ctx)
    if(!result){
        return false;
    }
    return result;
}

const deleteShop = async (obj, {id}, ctx)=>{
    const result = await shop.deleteShop(id, ctx);
    if(!result){
        return false;
    }
    return result;
}

module.exports = {
    addShop,
    deleteShop
}