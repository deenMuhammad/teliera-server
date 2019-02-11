const { gql } = require('apollo-server')


module.exports = gql`
type PaginatedProduct {
  next: Int!
  hasMore: Boolean!
  products: [Product]!
}
 type PaginatedShops {
  next: Int
  hasMore: Boolean
  shops: [ShopforBatch]
 }
 type PaginatedOrder{
  next: Int!
  hasMore: Boolean!
  order: [Order]
 }
 type PaginatedCartProducts {
  next: Int!
  hasMore: Boolean!
  cart: [CartProduct]
}
type PaginatedLikedProducts {
  next: Int!
  hasMore: Boolean!
  liked: [LikedProduct]
}
type Product {
  _id: String,
  name: String
  Price: Float
  Category: Int
  Stock: [Item]
  shop: String
  short_desc: String
  long_desc: String
  discount: Float
  hot: Boolean
  images:[String],
  date_added: Float,
  approved: Int,
}
type Item {
      _id: String
      color: String
      size: Float
      count: Int
}
type Shop {
  _id: String,
  name: String,
  logo: String,
  address: String,
  phone: String,
  username: String,
  password: String,
  sales: Int,
  rank: Int,
  account: String,
  date_opened: Float,
}
type ShopforBatch{
  showcase: [String]
  Shop: Shop
}
type Order {
  customer_id: String,
  product_id: String,
  status: Int,
  shipping_adress: String,
  phone: String,
  payment_type: String,
  item: [Item], #We need array of items in orders because user might order 2 or more of the same kind
  date_ordered: Float
}

type accessToken {
  _id: String,
  iat: Int,
  exp: Int
}
type User {
  username: String,
  name: String,
  password: String,
  address: String,
  phone: String,
  sign_up_date: Float
}

type CartProduct {
  _id: String,
  product_id: Product,
  customer_id: String
  date_added: Float,
  #we have to add specs of product added to cart. For example, color, number
}
type LikedProduct {
  _id: String,
  product_id: Product,
  customer_id: String
  date_added: Float,
  #we have to add specs of product Liked by user. For example, color, number
}
type SuperAdmin {
  _id: String,
  username: String,
  password: String
}

input InputItem {
      color: String
      size: Float
      count: Int
}
`