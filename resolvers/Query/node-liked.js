const likeds = require('./../../nodes/liked')


const getLikedProductBatch = async (obj, {pageSize, next}, ctx)=>{
    const liked = await likeds.getLikedProductBatch({pageSize, next}, ctx);
    if(!liked){
        throw new Error(`getBatchLikedNull`)
    }
    return liked; 
}

module.exports = {
    getLikedProductBatch
}