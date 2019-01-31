const shop = require('./../../nodes/shop')

const addShop = async (obj, {name, logo, address, phone, username, password, account}, ctx)=>{
    const result = await shop.addShop({name, logo, address, phone, username, password, account}, ctx)
    if(!result){
        return false;
    }
    return result;
}

module.exports = {
    addShop
}