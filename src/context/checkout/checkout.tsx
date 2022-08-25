import { createContext, ReactNode } from 'react'
import { Cart } from '../../domain/models/cart'
import { Product } from '../../domain/models/product'
import { useCartReducer } from '../../hooks/cart'

interface CheckoutContextProps {
  cart: Cart
  addItemToCart: (product: Product) => void
  decrementItemQuantity: (product: Product) => void
  incrementItemQuantity: (product: Product) => void
  removeTheItemFromTheCart: (product: Product) => void
  getItemQuantityByProductId: (id: string) => number
  getTheQuantityOfTheTotalItems: () => number
}

interface CheckoutContextProviderProps {
  children: ReactNode
}

export const CheckoutContext = createContext({} as CheckoutContextProps)

export function CheckoutProvider({ children }: CheckoutContextProviderProps) {
  const {
    items,
    addItemToCart,
    decrementItemQuantity,
    incrementItemQuantity,
    removeTheItemFromTheCart,
  } = useCartReducer()

  const cart: Cart = {
    items,
  }

  const getItemQuantityByProductId = (id: string): number => {
    const item = items.find((item) => item.product.id === id)

    if (item) {
      return item.quantity
    }

    return 0
  }

  const getTheQuantityOfTheTotalItems = () => {
    const totalItemsQuantity = items.reduce((previousValue, item) => {
      return (previousValue += item.quantity)
    }, 0)

    return totalItemsQuantity
  }

  return (
    <CheckoutContext.Provider
      value={{
        cart,
        addItemToCart,
        decrementItemQuantity,
        incrementItemQuantity,
        removeTheItemFromTheCart,
        getItemQuantityByProductId,
        getTheQuantityOfTheTotalItems,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
