import { Trash } from 'phosphor-react'
import { Counter } from '../../../../../../components/counter'
import { Text } from '../../../../../../components/typography/text'
import { Product } from '../../../../../../domain/models/product'
import { useCheckout } from '../../../../../../hooks/checkout'
import {
  ActionsButtonsContainer,
  ActionsContainer,
  ActionsInfoContainer,
  ContentContainer,
  Image,
  RemoveButton,
} from './items-list.styles'

export function ItemsList() {
  const { cart, removeTheItemFromTheCart, getTotalItemPriceById } = useCheckout()

  const handleRemoveItemFromTheCart = (product: Product) => {
    removeTheItemFromTheCart(product)
  }

  return (
    <>
      {cart.items.map(({ product }) => (
        <ContentContainer key={product.id}>
          <ActionsContainer>
            <Image src={product.image.url} alt={product.image.description} />
            <ActionsInfoContainer>
              <Text variant='regularM' color='subtitle'>
                Café expresso
              </Text>
              <ActionsButtonsContainer>
                <Counter product={product} />
                <RemoveButton onClick={() => handleRemoveItemFromTheCart(product)}>
                  <Trash size={16} />
                  <Text variant='regularXS' color='text'>
                    REMOVER
                  </Text>
                </RemoveButton>
              </ActionsButtonsContainer>
            </ActionsInfoContainer>
          </ActionsContainer>
          <Text variant='boldM' color='text'>
            R${' '}
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
            }).format(getTotalItemPriceById(product.id))}
          </Text>
        </ContentContainer>
      ))}
    </>
  )
}
