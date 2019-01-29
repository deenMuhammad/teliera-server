const Product = require('./../db/models/product');

const getProduct = async (_id)=>{
    const product = Product.findById({_id: _id}).exec();
    return product;
}
const getHotProductBatch = async (pageSize, next)=>{
    var hasMore=true;
    var _next;
    var arr = [];
    var result = Product.find({hot: true},{}, {skip: next-1, sort: { 'date_added' : -1 }}); //fetching the newest hot product first
    arr = await result;
    let len  = arr.length;
    console.log(len);
    if(len>=pageSize){
        result = arr.slice(0, pageSize);
        if(len===pageSize){
            hasMore=false
        }
    }
    else{
        result = arr;
        hasMore=false;
    }
    _next = next+pageSize;
    return {
        hasMore: hasMore,
        next: _next,
        products: result
    }
}
const getSaleProductBatch = async (pageSize, next)=>{
    var hasMore=true;
    var _next;
    var arr = [];
    var result = Product.find({$where: function() { 
        return ( this.discount > 0 ); } },{}, {skip: next-1, sort: { 'discount' : -1 }}); //fetching the highest discount first
    arr = await result;
    let len  = arr.length;
    if(len>=pageSize){
        result = arr.slice(0, pageSize);
        if(len===pageSize){
            hasMore=false
        }
    }
    else{
        result = arr;
        hasMore=false;
    }
    _next = next+pageSize;
    return {
        hasMore: hasMore,
        next: _next,
        products: result
    }
}
const getImageBatchWithShopID = async (pageSize, _id)=>{
    const result = await Product.find({shop: _id}, {}, {limit: 4});
    var arr = [];
    for(let i = 0; i < result.length; i++){
        arr.push(result[i].images[0]);
    }
    return arr;
}
module.exports= {
    getProduct,
    getHotProductBatch,
    getSaleProductBatch,
    getImageBatchWithShopID
}