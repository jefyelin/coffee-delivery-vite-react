import { Minus, Plus } from 'phosphor-react'
import { Product } from '../../domain/models/product'
import { useCheckout } from '../../hooks/checkout'
import { Text } from '../typography/text'
import { AccessibilityHiddenCounterValue, Button, Container, TextContainer } from './counter.styles'

interface CounterProps {
  product: Product
}

export function Counter({ product }: CounterProps) {
  const { decrementItemQuantity, incrementItemQuantity, getItemQuantityByProductId } = useCheckout()

  const itemQuantity = getItemQuantityByProductId(product.id)

  const countIsEqualToZero = itemQuantity === 0
  const countIsEqualOne = itemQuantity === 1
  const countIsGreaterThanOne = itemQuantity > 1

  const handleDecrementItemQuantity = () => decrementItemQuantity(product)
  const handleIncrementItemQuantity = () => incrementItemQuantity(product)

  return (
    <Container aria-describedby={product.id}>
      {!countIsEqualToZero && (
        <Button
          onClick={handleDecrementItemQuantity}
          type='button'
          aria-label={`Remover ${product.name}`}
        >
          <Minus size={14} weight='bold' alt='Ícone com sinal de menos.' />
        </Button>
      )}
      <TextContainer shouldSetLeftPedding={countIsEqualToZero} aria-live='polite'>
        <Text variant='regularM'>
          {itemQuantity}
          <AccessibilityHiddenCounterValue>
            {countIsEqualToZero && `, nenhum ${product.name} adicionado`}
            {countIsEqualOne && `item adicionado: ${product.name}`}
            {countIsGreaterThanOne && `itens adicionados: ${product.name}`}
          </AccessibilityHiddenCounterValue>
        </Text>
      </TextContainer>
      <Button
        onClick={handleIncrementItemQuantity}
        type='button'
        aria-label={`Adicionar ${product.name}`}
      >
        <Plus size={14} weight='bold' alt='Ícone com sinal de mais.' />
      </Button>
    </Container>
  )
}
