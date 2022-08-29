import produce from 'immer'
import { useCallback, useReducer } from 'react'
import { Cart, ItemCart } from '../../domain/models/cart'
import { Product } from '../../domain/models/product'

type CartAction = {
  type: 'add' | 'increment' | 'decrement' | 'delete' | 'delete-all'
  payload?: {
    product: Product
  }
}

type CartState = Cart

interface UseCartReducerProps {
  initialItems?: ItemCart[]
}

export function useCartReducer({ initialItems = [] }: UseCartReducerProps = {}) {
  const [state, dispatch] = useReducer(cartReducer, { items: initialItems })

  const addItemToCart = useCallback(
    (product: Product) => dispatch({ type: 'add', payload: { product } }),
    [],
  )

  const incrementItemQuantity = useCallback(
    (product: Product) =>
      dispatch({
        type: 'increment',
        payload: {
          product,
        },
      }),
    [],
  )

  const decrementItemQuantity = useCallback(
    (product: Product) =>
      dispatch({
        type: 'decrement',
        payload: {
          product,
        },
      }),
    [],
  )

  const removeTheItemFromTheCart = useCallback(
    (product: Product) =>
      dispatch({
        type: 'delete',
        payload: {
          product,
        },
      }),
    [],
  )

  const removeAllItemsFromTheCart = useCallback(
    () =>
      dispatch({
        type: 'delete-all',
      }),
    [],
  )

  return {
    items: state.items,
    addItemToCart,
    incrementItemQuantity,
    decrementItemQuantity,
    removeTheItemFromTheCart,
    removeAllItemsFromTheCart,
  }
}

function cartReducer(state: CartState, action: CartAction): CartState {
  const { items } = state
  const { payload, type } = action

  const itemIndex = items.findIndex((item) => item.product?.id === payload?.product.id)
  const itemNotExists = itemIndex === -1
  const itemExists = itemIndex !== -1

  const getUpdatedItemsWithNewItem = (): ItemCart[] => {
    const updatedItems = produce(items, (draftItems) => {
      if (itemNotExists) {
        draftItems.push({ product: payload?.product, quantity: 1 })
      }
    })

    return updatedItems
  }

  const getUpdatedItemsWithIncrementedItem = (): ItemCart[] => {
    const updatedItems = produce(items, (draftItems) => {
      if (itemExists) {
        draftItems[itemIndex].quantity += 1

        return
      }

      return getUpdatedItemsWithNewItem()
    })

    return updatedItems
  }

  const getUpdatedItemsWithDecrementedItem = (): ItemCart[] => {
    const updatedItems = produce(items, (draftItems) => {
      if (itemExists && draftItems[itemIndex].quantity > 1) {
        draftItems[itemIndex].quantity -= 1

        return
      }

      return getUpdatedItemsWithoutRemovedItem()
    })

    return updatedItems
  }

  const getUpdatedItemsWithoutRemovedItem = (): ItemCart[] => {
    const updatedItems = produce(items, (draftItems) => {
      if (itemExists) {
        draftItems.splice(itemIndex, 1)
      }
    })

    return updatedItems
  }

  switch (type) {
    case 'add':
      return { items: getUpdatedItemsWithNewItem() }
    case 'increment':
      return { items: getUpdatedItemsWithIncrementedItem() }
    case 'decrement':
      return { items: getUpdatedItemsWithDecrementedItem() }
    case 'delete':
      return { items: getUpdatedItemsWithoutRemovedItem() }
    case 'delete-all': {
      return { items: [] }
    }
  }
}
