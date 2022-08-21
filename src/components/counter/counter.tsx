import { Minus, Plus } from 'phosphor-react'
import { useCounterReducer } from '../../hooks/counter-reducer'
import { Text } from '../typography/text'
import { Button, Container, TextContainer } from './counter.styles'

export function Counter() {
  const { state, decrement, increment } = useCounterReducer({ initialCount: 0 })

  const countIsEqualToZero = state.count === 0

  return (
    <Container>
      {!countIsEqualToZero && (
        <Button onClick={decrement}>
          <Minus size={14} weight='bold' />
        </Button>
      )}
      <TextContainer shouldSetLeftPedding={countIsEqualToZero}>
        <Text variant='regularM'>{state.count}</Text>
      </TextContainer>
      <Button onClick={increment}>
        <Plus size={14} weight='bold' />
      </Button>
    </Container>
  )
}
