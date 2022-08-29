import { Product } from './product'

export type ItemCart = {
  product?: Product
  quantity: number
}

export type Cart = {
  items: ItemCart[]
}
