import { ShoppingBagOpen } from 'phosphor-react'
import { Text } from '../../../../components/typography/text'
import { useCheckout } from '../../../../hooks/checkout'
import { ItemsList } from './components/items-list'
import { PriceInfo } from './components/price-info'
import { Container, EmptyListContainer, SubmitButton } from './purchase-review.styles'

export function PurchaseReview() {
  const { getTheQuantityOfTheTotalItems } = useCheckout()

  const totalItems = getTheQuantityOfTheTotalItems()

  return (
    <Container>
      {totalItems === 0 && (
        <EmptyListContainer>
          <ShoppingBagOpen size={60} />
          <Text variant='boldM' color='text'>
            Você ainda não adicionou nenhum café em seu carrinho
          </Text>
        </EmptyListContainer>
      )}
      {totalItems > 0 && (
        <>
          <ItemsList />
          <PriceInfo />
          <SubmitButton type='submit'>
            <Text variant='boldXM' color='white'>
              CONFIRMAR PEDIDO
            </Text>
          </SubmitButton>
        </>
      )}
    </Container>
  )
}
