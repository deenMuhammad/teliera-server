const { gql } = require('apollo-server');
const types = require('./types');

const query = gql`
type Query {
  header: accessToken,
  getProduct(_id: String!): Product,
  getHotProductBatch(
      pageSize: Int,
      next: Int
  ): PaginatedProduct!
  getDisapprovedProductBatch(
      pageSize: Int,
      next: Int
  ): PaginatedProduct!
  getApprovedProductBatch(
      pageSize: Int,
      next: Int
  ): PaginatedProduct!
  getApprovedProductBatchAsAdmin(
      pageSize: Int,
      next: Int
  ): PaginatedProduct!
  getDisapprovedProductBatchAsAdmin(
      pageSize: Int,
      next: Int
  ): PaginatedProduct!
  getPendingProductBatchAsAdmin(
      pageSize: Int,
      next: Int
  ): PaginatedProduct!
  getPendingProductBatch(
      pageSize: Int,
      next: Int
  ): PaginatedProduct!
  getSaleProductBatch(
      pageSize: Int,
      next: Int
  ): PaginatedProduct!
  getShop(_id: String!): Shop
  getShopBatch(
      pageSize: Int,
      next: Int
  ): PaginatedShops!
  getSingleShopProductBatch(
    _id: String!, #shop ID
    pageSize: Int,
    next: Int,
  ):PaginatedProduct
  logInWithPassword(
    username: String!,
    password: String!
  ): String
  verifyUserSession:Boolean #this is used whenever user runs the app with token. This condition holds true if the user has logged in b before and he/she is using the app again with the same credeantials(token). User does not have to sign in again. App automatically check the token in the background and gets Boolean response. True user continues with the same credential, false: user has to be logged out automatilly in the background.
  getOrdersBatch(
    pageSize: Int,
    next: Int
  ): PaginatedOrder
  getCartProductBatch(
    pageSize: Int,
    next: Int
  ):PaginatedCartProducts,
  getLikedProductBatch(
    pageSize: Int,
    next: Int
  ):PaginatedLikedProducts,
  LogInSuperAdmin(
    username: String!,
    password: String!
  ):String
  LogInAdmin(
    username: String!,
    password: String!
  ):String
  getProductBatchByCategory(
      pageSize: Int!,
      next: Int!,
      category: Int!
  ):PaginatedProduct
  getMatchingProductList(
    current_product_id: String!
    ):[Product]
}

type Mutation{
  signUpWithPassword(
    username: String!, 
    name: String!, 
    password: String!,
    address: String,
    phone: String
  ):String,
  modifyUserAccount(
    username: String!, 
    name: String!, 
    password: String!,
    address: String,
    phone: String
  ):Boolean
  addToCart(
    product_id: String!
  ):Boolean
  removeFromCart(
    product_id: String!
  ):Boolean
  addToLiked(
    product_id: String!
  ):Boolean,
  removeFromLiked(
    product_id: String!
  ):Boolean
  addShop(
    name: String!,
    logo: String!,
    address: String!,
    phone: String!,
    username: String!,
    password: String!,
    account: String!,
  ):Boolean,
  deleteShop(
    id: String!
  ):Boolean!
  addProduct(
    name: String!
    Price: Float!
    Category: Int!
    Stock:[InputItem!]
    short_desc: String!
    long_desc: String!
    discount: Float!
    hot: Boolean!
    images:[
        String!
    ]
  ):Boolean,
  deleteProduct(
    id: String!
  ):Boolean
  approveProduct(
    id: String!
  ):Boolean
  DisapproveProduct(
    id: String!
  ):Boolean
  makeProductItemSoldOut(
    id: String!,
    item_id: String!,
  ):Boolean
  makeOnSaleAgain(
    id: String!,
    item_id: String!,
    count: Int!
  ):Boolean
}
`

module.exports  = [query, types]