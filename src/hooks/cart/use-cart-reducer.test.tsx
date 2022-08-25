import { act, renderHook } from '@testing-library/react'
import { describe } from 'vitest'
import { ItemCart } from '../../domain/models/cart'
import { Product } from '../../domain/models/product'
import { additionalProductMock, productMock } from './mocks'
import { useCartReducer } from './use-cart-reducer'

describe('useCartReducer', () => {
  test('should add item to the cart', () => {
    const { result } = renderHook(useCartReducer)

    act(() => {
      result.current.addItemToCart(productMock)
    })

    const expectedItems: ItemCart[] = [{ product: productMock, quantity: 1 }]

    expect(result.current.items).toEqual(expectedItems)
  })

  test('should not add item to the cart', () => {
    const previousItems: ItemCart[] = [
      {
        product: productMock,
        quantity: 1,
      },
    ]

    const { result } = renderHook(() => useCartReducer({ initialItems: previousItems }))

    const existingProduct: Product = {
      ...previousItems[0].product,
    }

    act(() => {
      result.current.addItemToCart(existingProduct)
    })

    expect(result.current.items).toEqual(previousItems)
  })

  test('should be added the item to the cart if the item does not exist when incrementing', () => {
    const { result } = renderHook(useCartReducer)

    act(() => {
      result.current.incrementItemQuantity(productMock)
    })

    const expectedItems: ItemCart[] = [{ product: productMock, quantity: 1 }]

    expect(result.current.items).toEqual(expectedItems)
  })

  test('should increment the correct item quantity if the item exists in the cart', () => {
    const { result } = renderHook(() =>
      useCartReducer({
        initialItems: [
          { product: productMock, quantity: 1 },
          { product: additionalProductMock, quantity: 3 },
        ],
      }),
    )

    act(() => {
      result.current.incrementItemQuantity(productMock)
    })

    const expectedItems: ItemCart[] = [
      {
        product: productMock,
        quantity: 2,
      },
      { product: additionalProductMock, quantity: 3 },
    ]

    expect(result.current.items).toEqual(expectedItems)
  })

  test('should not decrement the item quantity if the items do not exists in the cart', () => {
    const { result } = renderHook(useCartReducer)

    act(() => {
      result.current.decrementItemQuantity(productMock)
    })

    expect(result.current.items).toEqual([])
  })

  test(`should remove the item from the cart if the item quantity is equal to one 
    when decrementing`, () => {
    const { result } = renderHook(() =>
      useCartReducer({ initialItems: [{ product: productMock, quantity: 1 }] }),
    )

    act(() => {
      result.current.decrementItemQuantity(productMock)
    })

    expect(result.current.items).toEqual([])
  })

  test('should decrement the correct item quantity if the item exists in the cart', () => {
    const { result } = renderHook(() =>
      useCartReducer({
        initialItems: [
          { product: productMock, quantity: 2 },
          { product: additionalProductMock, quantity: 3 },
        ],
      }),
    )

    act(() => {
      result.current.decrementItemQuantity(productMock)
    })

    const expectedItems: ItemCart[] = [
      { product: productMock, quantity: 1 },
      { product: additionalProductMock, quantity: 3 },
    ]

    expect(result.current.items).toEqual(expectedItems)
  })

  test('should remove the correct item of the cart if the item exists in the cart', () => {
    const { result } = renderHook(() =>
      useCartReducer({
        initialItems: [
          {
            product: productMock,
            quantity: 2,
          },
          {
            product: additionalProductMock,
            quantity: 3,
          },
        ],
      }),
    )

    act(() => {
      result.current.removeTheItemFromTheCart(productMock)
    })

    const expectedItems: ItemCart[] = [{ product: additionalProductMock, quantity: 3 }]

    expect(result.current.items).toEqual(expectedItems)
  })

  test('should not remove the item from the cart if the item does not exist in the cart', () => {
    const { result } = renderHook(() =>
      useCartReducer({
        initialItems: [
          {
            product: productMock,
            quantity: 2,
          },
        ],
      }),
    )

    act(() => {
      result.current.removeTheItemFromTheCart(additionalProductMock)
    })

    const expectedItems: ItemCart[] = [{ product: productMock, quantity: 2 }]

    expect(result.current.items).toEqual(expectedItems)
  })
})
