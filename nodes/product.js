const Product = require('./../db/models/product');
const admins = require('./admin')
const superadmins = require('./superadmin')

const getProduct = async (_id)=>{
    const product = Product.findById({_id: _id}).exec();
    return product;
}
const getHotProductBatch = async (pageSize, next)=>{
    var hasMore=true;
    var _next;
    var arr = [];
    var result = Product.find({hot: true, approved: true},{}, {skip: next-1, sort: { 'date_added' : -1 }}); //fetching the newest hot product first
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
const getSaleProductBatch = async (pageSize, next)=>{
    var hasMore=true;
    var _next;
    var arr = [];
    var result = Product.find({approved: true, $where: function() { 
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
const getUnapproveProductBatch = async (pageSize, next)=>{
    var hasMore=true;
    var _next;
    var arr = [];
    var result = Product.find({approved: false},{}, {skip: next-1, sort: { 'date_added' : 1 }}); //fetching the oldest hot product first
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
const addProduct = async ({name, Price, Category, Stock, short_desc, long_desc, discount, hot, images}, ctx)=>{
    //date_added: Float! approved: Boolean!
    const res = await admins.verifyAdmin(ctx.headers.accessToken)
    if(res.bool){//token valid and the superAdmin is valid
        var newProduct = await Product({
            name: name,
            Price: Price,
            Category: Category,
            Stock: Stock,
            shop: res.id,
            short_desc: short_desc,
            long_desc: long_desc,
            discount: discount,
            hot: hot,
            images: images,
            date_added: Date.now(),
            approved: false
        }).save()
        if(!newProduct){
            throw new Error("addProductFailed");
        }
        else{
            return true;
        }
    }
    else{
        throw new Error('AdminTokenFailed');
    }
}

const deleteProduct = async ({id}, ctx)=>{
    //date_added: Float! approved: Boolean!
    const res = await admins.verifyAdmin(ctx.headers.accessToken)
    if(res.bool){//token valid and the superAdmin is valid
        var result = await Product.findByIdAndDelete({_id: id}).exec();
        if(!result){
            throw new Error("deleteProductFailed");
        }
        else{
            return true;
        }
    }
    else{
        throw new Error('AdminTokenFailed');
    }
}

const approveProduct = async (id, ctx)=>{
    var tokeValidity = await superadmins.verifySuperAdmin(ctx.headers.accessToken)
    if(tokeValidity){//token valid and the superAdmin is valid
        const result = await Product.findByIdAndUpdate({_id: id}, {$set: {approved: true}}).exec();
        if(!result){
            throw new Error('productNotFound');
        }
        return result;
    }
    else{
        return null;
    }
}

module.exports= {
    getProduct,
    getHotProductBatch,
    getSaleProductBatch,
    getImageBatchWithShopID,
    addProduct,
    deleteProduct,
    approveProduct,
    getUnapproveProductBatch
}