import { useContext } from 'react'
import { CheckoutContext } from '../../context/checkout'

export const useCheckout = () => useContext(CheckoutContext)
