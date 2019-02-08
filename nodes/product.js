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
    var result = Product.find({hot: true, approved: 2},{}, {skip: next-1, sort: { 'date_added' : -1 }}); //fetching the newest hot product first
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
    var result = Product.find({approved: 2, $where: function() { 
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
const getPendingProductBatch = async (pageSize, next)=>{
    var hasMore=true;
    var _next;
    var arr = [];
    var result = Product.find({approved: 1},{}, {skip: next-1, sort: { 'date_added' : 1 }}); //fetching the oldest hot product first
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
const getApprovedProductBatch = async (pageSize, next)=>{ //this can be fetched by anyone
    var hasMore=true;
    var _next;
    var arr = [];
    var result = Product.find({approved: 2},{}, {skip: next-1, sort: { 'date_added' : 1 }}); //fetching the oldest hot product first
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
const getDisapprovedProductBatch = async (pageSize, next)=>{
    var hasMore=true;
    var _next;
    var arr = [];
    var result = Product.find({approved: 3},{}, {skip: next-1, sort: { 'date_added' : 1 }}); //fetching the oldest hot product first
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
    const result = await Product.find({shop: _id}, {}, {limit: pageSize});
    var arr = [];
    for(let i = 0; i < result.length; i++){
        arr.push(result[i].images[0]);
    }
    return arr;
}
const addProduct = async ({name, Price, Category, Stock, short_desc, long_desc, discount, hot, images}, ctx)=>{
    //date_added: Float! approved: Int!
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
            approved: 1
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
        const result = await Product.findByIdAndUpdate({_id: id}, {$set: {approved: 2}}).exec();
        if(!result){
            throw new Error('productNotFound');
        }
        return result;
    }
    else{
        return null;
    }
}
const DisapproveProduct = async (id, ctx)=>{
    var tokeValidity = await superadmins.verifySuperAdmin(ctx.headers.accessToken)
    if(tokeValidity){//token valid and the superAdmin is valid
        const result = await Product.findByIdAndUpdate({_id: id}, {$set: {approved: 3}}).exec();
        if(!result){
            throw new Error('productNotFound');
        }
        return result;
    }
    else{
        return null;
    }
}
const getApprovedProductBatchAsAdmin = async ({pageSize, next}, ctx)=>{
    var hasMore=true;
    var _next;
    var arr = [];
    var res = await admins.verifyAdmin(ctx.headers.accessToken);
    if(!res.bool){
        throw new Error('AdminTokenFailed');
    }
    var result = Product.find({shop: res.id, approved: 2},{}, {skip: next-1, sort: { 'date_added' : -1 }});//FETCHING THE NEWEST PRODUCT OF A SHOP FIRST
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
const getDisapprovedProductBatchAsAdmin = async ({pageSize, next}, ctx)=>{
    var hasMore=true;
    var _next;
    var arr = [];
    var res = await admins.verifyAdmin(ctx.headers.accessToken);
    if(!res.bool){
        throw new Error('AdminTokenFailed');
    }
    var result = Product.find({shop: res.id, approved: 3},{}, {skip: next-1, sort: { 'date_added' : -1 }});//FETCHING THE NEWEST PRODUCT OF A SHOP FIRST
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

const getPendingProductBatchAsAdmin = async ({pageSize, next}, ctx)=>{
    var hasMore=true;
    var _next;
    var arr = [];
    var res = await admins.verifyAdmin(ctx.headers.accessToken);
    if(!res.bool){
        throw new Error('AdminTokenFailed');
    }
    var result = Product.find({shop: res.id, approved: 1},{}, {skip: next-1, sort: { 'date_added' : -1 }});//FETCHING THE NEWEST PRODUCT OF A SHOP FIRST
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


const makeProductItemSoldOut = async (id, item_id , ctx)=>{
    var res = await admins.verifyAdmin(ctx.headers.accessToken);
    if(!res.bool){
        throw new Error('AdminTokenFailed');
    }
    else{
        const result = await Product.findOneAndUpdate({ "_id": id,"Stock._id": item_id}, {"$set": {"Stock.$.count": 0}}).exec();
        if(!result){
            throw new Error('productNotFound');
        }
        return result;
    }
}
const makeOnSaleAgain = async (id, item_id, count, ctx)=>{ //This resolver can be used to change the number of the number of products on sale
    var res = await admins.verifyAdmin(ctx.headers.accessToken);
    if(!res.bool){
        throw new Error('AdminTokenFailed');
    }
    else{
        const result = await Product.findOneAndUpdate({ "_id": id,"Stock._id": item_id}, {"$set": {"Stock.$.count": count}}).exec();
        if(!result){
            throw new Error('productNotFound');
        }
        return result;
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
    getPendingProductBatch,
    getApprovedProductBatch,
    getDisapprovedProductBatch,
    DisapproveProduct,
    getApprovedProductBatchAsAdmin,
    getDisapprovedProductBatchAsAdmin,
    getPendingProductBatchAsAdmin,
    makeProductItemSoldOut,
    makeOnSaleAgain
}