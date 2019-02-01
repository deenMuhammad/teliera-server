const GraphQLJSON = require('graphql-type-json');
const products = require('./Query/node-product');
const productsMutation = require('./Mutation/node-products');
const shop = require('./Query/node-shops');
const shopMutation = require('./Mutation/node-shop');
const users = require('./Query/node-users');
const user = require('./../nodes/user')
const mutationUsers = require('./Mutation/node-users');
const orders = require('./Query/node-orders');
const carts = require('./Query/node-cart');
const cartsMutation = require('./Mutation/node-cart');
const likeds = require('./Query/node-liked');
const likedsMutation = require('./Mutation/node-liked');
const superadmins = require('./Query/node-superadmin');
const admins = require('./Query/node-admin');

module.exports = {
  JSON: GraphQLJSON,
  Query: {
    header: async (obj,{}, ctx)=>{ var User = await user.verifyUser(ctx.headers.accessToken); console.log(User._id); return User},
    getProduct: products.oneProduct,
    getHotProductBatch: products.getHotProductBatch,
    getSaleProductBatch: products.getSaleProductBatch,
    getDisapprovedProductBatch: products.getDisapprovedProductBatch,
    getApprovedProductBatch: products.getApprovedProductBatch,
    getApprovedProductBatchAsAdmin: products.getApprovedProductBatchAsAdmin,
    getDisapprovedProductBatchAsAdmin: products.getDisapprovedProductBatchAsAdmin,
    getPendingProductBatchAsAdmin: products.getPendingProductBatchAsAdmin,
    getPendingProductBatch: products.getPendingProductBatch,
    getShop: shop.getShop,
    getShopBatch: shop.getShopBatch,
    getSingleShopProductBatch: shop.getSingleShopProductBatch,
    logInWithPassword: users.loginWithPassword,
    getOrdersBatch: orders.getOrdersBatch,
    getCartProductBatch: carts.getCartProductBatch,
    getLikedProductBatch: likeds.getLikedProductBatch,
    LogInSuperAdmin: superadmins.loginWithPassword,
    LogInAdmin: admins.loginWithPassword
  },
  Mutation: {
    signUpWithPassword: mutationUsers.signUpWithPassword,
    addToCart: cartsMutation.addToCart,
    addToLiked: likedsMutation.addToLiked,
    addShop: shopMutation.addShop,
    deleteShop: shopMutation.deleteShop,
    addProduct: productsMutation.addProduct,
    deleteProduct: productsMutation.deleteProduct,
    approveProduct: productsMutation.approveProduct,
    DisapproveProduct: productsMutation.DisapproveProduct,
    makeProductItemSoldOut: productsMutation.makeProductItemSoldOut,
    makeOnSaleAgain: productsMutation.makeOnSaleAgain,
    modifyUserAccount: mutationUsers.modifyUserAccount
  }
}