import { screen } from '@testing-library/react'
import { describe, test, vi } from 'vitest'
import { CheckoutContextProps } from '../../../../context/checkout'
import { customRender } from '../../../../utils/tests/render'
import { Cart } from './cart'

describe('Cart', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  test('should render correctly', () => {
    customRender(<Cart />)

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.queryByText('0')).not.toBeInTheDocument()
  })

  test('should render correctly if useCheckout returns getTheQuantityOfTheTotalItems > 0', () => {
    type UseCheckoutMockType = Pick<CheckoutContextProps, 'getTheQuantityOfTheTotalItems'>

    vi.mock('../../../../hooks/checkout', () => ({
      useCheckout: (): UseCheckoutMockType => ({
        getTheQuantityOfTheTotalItems: () => 1,
      }),
    }))

    customRender(<Cart />)

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
  })
})
