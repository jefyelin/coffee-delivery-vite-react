import { act, renderHook } from '@testing-library/react'
import { describe, test } from 'vitest'
import { useCounterReducer } from './use-counter-reducer'

describe('useCounterReducer', () => {
  test('should increment counter value', () => {
    const { result } = renderHook(useCounterReducer, { initialProps: { initialCount: 0 } })

    act(() => {
      result.current.increment()
    })

    expect(result.current.state).toEqual({ count: 1 })
  })

  test('should decrement counter value', () => {
    const { result } = renderHook(useCounterReducer, { initialProps: { initialCount: 1 } })

    act(() => {
      result.current.decrement()
    })

    expect(result.current.state).toEqual({ count: 0 })
  })

  test('should not decrement counter value if value is zero', () => {
    const { result } = renderHook(useCounterReducer, { initialProps: { initialCount: 0 } })

    act(() => {
      result.current.decrement()
    })

    expect(result.current.state).toEqual({ count: 0 })
  })
})
