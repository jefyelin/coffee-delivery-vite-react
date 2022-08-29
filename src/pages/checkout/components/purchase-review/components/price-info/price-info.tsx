import { Text } from '../../../../../../components/typography/text'
import { useCheckout } from '../../../../../../hooks/checkout'
import { Container, TextContainer } from './price-info.styles'

export function PriceInfo() {
  const { priceReview } = useCheckout()

  return (
    <Container>
      <TextContainer>
        <Text variant='regularS' color='text'>
          Total de items
        </Text>
        <Text variant='regularM' color='text'>
          R${' '}
          {new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(priceReview.totalItems)}
        </Text>
      </TextContainer>
      <TextContainer>
        <Text variant='regularS' color='text'>
          Entrega
        </Text>
        <Text variant='regularM' color='text'>
          R${' '}
          {new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(priceReview.delivery)}
        </Text>
      </TextContainer>
      <TextContainer>
        <Text variant='boldL' color='text'>
          Total
        </Text>
        <Text variant='boldL' color='text'>
          R${' '}
          {new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(priceReview.total)}
        </Text>
      </TextContainer>
    </Container>
  )
}
