import { ShoppingCart } from 'phosphor-react'
import { Text } from '../../../typography/text'
import { Button, ItemsCounter } from './cart.styles'

export function Cart() {
  return (
    <Button type='button' aria-describedby='cart-items-counter'>
      <ShoppingCart size={22} weight='fill' alt='Ícone de um carrinho de compras' />
      <ItemsCounter id='cart-items-counter'>
        <Text variant='boldS' color='white' aria-label='3 itens no carrinho de compras'>
          3
        </Text>
      </ItemsCounter>
    </Button>
  )
}
