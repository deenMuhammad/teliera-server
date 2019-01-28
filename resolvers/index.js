const GraphQLJSON = require('graphql-type-json');
const products = require('./Query/node-product');
const shop = require('./Query/node-shops');
const users = require('./Query/node-users');
const user = require('./../nodes/user')
const mutationUsers = require('./Mutation/node-users');
const orders = require('./Query/node-orders')
const carts = require('./Query/node-cart')
const cartsMutation = require('./Mutation/node-cart')
const likeds = require('./Query/node-liked')
const likedsMutation = require('./Mutation/node-liked')

module.exports = {
  JSON: GraphQLJSON,
  Query: {
    header: async (obj,{}, ctx)=>{ var User = await user.verifyUser(ctx.headers.accessToken); console.log(User.user_id); return User},
    getProduct: products.oneProduct,
    getHotProductBatch: products.getHotProductBatch,
    getSaleProductBatch: products.getSaleProductBatch,
    getShop: shop.getShop,
    getShopBatch: shop.getShopBatch,
    getSingleShopProductBatch: shop.getSingleShopProductBatch,
    logInWithPassword: users.loginWithPassword,
    getOrdersBatch: orders.getOrdersBatch,
    getCartProductBatch: carts.getCartProductBatch,
    getLikedProductBatch: likeds.getLikedProductBatch
  },
  Mutation: {
    signUpWithPassword: mutationUsers.signUpWithPassword,
    addToCart: cartsMutation.addToCart,
    addToLiked: likedsMutation.addToLiked
  }
}