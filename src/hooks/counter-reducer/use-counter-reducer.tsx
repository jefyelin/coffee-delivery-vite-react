import { useCallback, useReducer } from 'react'

type CountAction = {
  type: 'increment' | 'decrement'
}

type State = {
  count: number
}

interface UseCounterReducerProps {
  initialCount: number
}

export const useCounterReducer = ({ initialCount }: UseCounterReducerProps) => {
  const [state, dispatch] = useReducer(counterReducer, { count: initialCount })

  const increment = useCallback(() => dispatch({ type: 'increment' }), [])
  const decrement = useCallback(() => dispatch({ type: 'decrement' }), [])

  return { state, increment, decrement }
}

function counterReducer(state: State, action: CountAction): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement': {
      if (state.count === 0) {
        return state
      }

      return { count: state.count - 1 }
    }
  }
}
