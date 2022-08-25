import { ShoppingCart } from 'phosphor-react'
import { useCheckout } from '../../../../hooks/checkout'
import { Text } from '../../../typography/text'
import { Button, ItemsCounter } from './cart.styles'

export function Cart() {
  const { getTheQuantityOfTheTotalItems } = useCheckout()

  const quantityOfTheTotalItems = getTheQuantityOfTheTotalItems()

  return (
    <Button type='button' aria-describedby='cart-items-counter'>
      <ShoppingCart size={22} weight='fill' alt='Ícone de um carrinho de compras' />
      {quantityOfTheTotalItems > 0 && (
        <ItemsCounter id='cart-items-counter'>
          <Text variant='boldS' color='white' aria-label='3 itens no carrinho de compras'>
            {quantityOfTheTotalItems}
          </Text>
        </ItemsCounter>
      )}
    </Button>
  )
}
