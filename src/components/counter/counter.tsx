import { Minus, Plus } from 'phosphor-react'
import { useCounterReducer } from '../../hooks/counter-reducer'
import { Text } from '../typography/text'
import { AccessibilityHiddenCounterValue, Button, Container, TextContainer } from './counter.styles'

interface CounterProps {
  item: {
    id: string
    name: string
  }
}

export function Counter({ item }: CounterProps) {
  const { state, decrement, increment } = useCounterReducer({ initialCount: 0 })

  const countIsEqualToZero = state.count === 0
  const countIsEqualOne = state.count === 1
  const countIsGreaterThanOne = state.count > 1

  return (
    <Container aria-describedby={item.id}>
      {!countIsEqualToZero && (
        <Button onClick={decrement} type='button' aria-label={`Remover ${item.name}`}>
          <Minus size={14} weight='bold' alt='Ícone com sinal de menos.' />
        </Button>
      )}
      <TextContainer shouldSetLeftPedding={countIsEqualToZero} aria-live='polite'>
        <Text variant='regularM'>
          {state.count}
          <AccessibilityHiddenCounterValue>
            {countIsEqualToZero && `, nenhum ${item.name} adicionado`}
            {countIsEqualOne && `item adicionado: ${item.name}`}
            {countIsGreaterThanOne && `itens adicionados: ${item.name}`}
          </AccessibilityHiddenCounterValue>
        </Text>
      </TextContainer>
      <Button onClick={increment} type='button' aria-label={`Adicionar ${item.name}`}>
        <Plus size={14} weight='bold' alt='Ícone com sinal de mais.' />
      </Button>
    </Container>
  )
}
