import { Product } from './product'

type ItemsCart = {
  product: Product
  quantity: number
}[]

export type Cart = {
  items: ItemsCart
}
