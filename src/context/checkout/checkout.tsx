import produce from 'immer'
import { createContext, ReactNode, useCallback, useEffect, useState } from 'react'
import { Cart } from '../../domain/models/cart'
import { PaymentType } from '../../domain/models/payment'
import { Product } from '../../domain/models/product'
import { useCartReducer } from '../../hooks/cart'

export interface CheckoutContextProps {
  cart: Cart
  priceReview: PriceReviewState
  delivery: DeliveryState
  addItemToCart: (product: Product) => void
  decrementItemQuantity: (product: Product) => void
  incrementItemQuantity: (product: Product) => void
  removeTheItemFromTheCart: (product: Product) => void
  getItemQuantityByProductId: (id: string) => number
  getTheQuantityOfTheTotalItems: () => number
  getTotalItemPriceById: (id: string) => number
  setDeliveryUserInfo: (userInfo: UserInfo) => void
}

type PriceReviewState = {
  totalItems: number
  delivery: number
  total: number
}

type UserInfo = {
  street: string
  city: string
  complement: string | undefined
  neighborhood: string
  number: string
  state: string
  paymentType: PaymentType
}

type DeliveryState = {
  userInfo: UserInfo | undefined
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
    removeAllItemsFromTheCart,
  } = useCartReducer()
  const [priceReview, setPriceReview] = useState<PriceReviewState>({
    delivery: 0,
    total: 0,
    totalItems: 0,
  })
  const [delivery, setDelivery] = useState<DeliveryState>({
    userInfo: undefined,
  })

  const cart: Cart = {
    items,
  }

  const getItemQuantityByProductId = useCallback(
    (id: string): number => {
      const item = items.find((item) => item.product?.id === id)

      if (item) {
        return item.quantity
      }

      return 0
    },
    [items],
  )

  const getTheQuantityOfTheTotalItems = useCallback(() => {
    const totalItemsQuantity = items.reduce((previousValue, item) => {
      return (previousValue += item.quantity)
    }, 0)

    return totalItemsQuantity
  }, [items])

  const getTotalItemPriceById = useCallback(
    (id: string): number => {
      const item = items.find((item) => item.product?.id === id)

      if (item?.product) {
        return item.product.price * item.quantity
      }

      return 0
    },
    [items],
  )

  const setTotalItemsPrice = useCallback(() => {
    {
      const totalItemsPrice = items.reduce((previousValue, item) => {
        return (previousValue += getTotalItemPriceById(item.product?.id ? item.product.id : ''))
      }, 0)

      setPriceReview((previousValue) => {
        const newPriceReview = produce(previousValue, (draftPriceReview) => {
          draftPriceReview.totalItems = totalItemsPrice
        })

        return newPriceReview
      })
    }
  }, [getTotalItemPriceById, items])

  const setDeliveryPrice = useCallback(() => {
    const deliveryPrice = (priceReview.totalItems * 20) / 100

    setPriceReview((previousValue) => {
      const newPriceReview = produce(previousValue, (draftPriceReview) => {
        draftPriceReview.delivery = deliveryPrice
      })

      return newPriceReview
    })
  }, [priceReview.totalItems])

  const setTotalCartPrice = useCallback(() => {
    const total = priceReview.totalItems + priceReview.delivery

    setPriceReview((previousValue) => {
      const newPriceReview = produce(previousValue, (draftPriceReview) => {
        draftPriceReview.total = total
      })

      return newPriceReview
    })
  }, [priceReview])

  const setDeliveryUserInfo = useCallback(
    (userInfo: UserInfo) => {
      setDelivery({ userInfo })
      removeAllItemsFromTheCart()
    },
    [removeAllItemsFromTheCart],
  )

  useEffect(() => {
    setTotalItemsPrice()
  }, [setTotalItemsPrice])

  useEffect(() => {
    setDeliveryPrice()
  }, [setDeliveryPrice])

  useEffect(() => {
    setTotalCartPrice()
  }, [setTotalCartPrice])

  return (
    <CheckoutContext.Provider
      value={{
        cart,
        priceReview,
        delivery,
        addItemToCart,
        decrementItemQuantity,
        incrementItemQuantity,
        removeTheItemFromTheCart,
        getItemQuantityByProductId,
        getTheQuantityOfTheTotalItems,
        getTotalItemPriceById,
        setDeliveryUserInfo,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
