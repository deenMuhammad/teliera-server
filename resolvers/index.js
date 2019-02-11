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
    verifyUserSession: users.verifyUserSession,
    getOrdersBatch: orders.getOrdersBatch,
    getCartProductBatch: carts.getCartProductBatch,
    getLikedProductBatch: likeds.getLikedProductBatch,
    LogInSuperAdmin: superadmins.loginWithPassword,
    LogInAdmin: admins.loginWithPassword,
    getProductBatchByCategory: products.getProductBatchByCategory,
    getMatchingProductList: products.getMatchingProductList
  },
  Mutation: {
    signUpWithPassword: mutationUsers.signUpWithPassword,
    addToCart: cartsMutation.addToCart,
    removeFromCart: cartsMutation.removeFromCart,
    addToLiked: likedsMutation.addToLiked,
    removeFromLiked: likedsMutation.romoveFromLiked,
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