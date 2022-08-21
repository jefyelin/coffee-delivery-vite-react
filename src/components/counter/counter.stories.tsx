import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppMockStories } from '../../utils/stories'
import { Counter } from './counter'

export default {
  title: 'Components/Counter',
} as ComponentMeta<typeof Counter>

export const Playground: ComponentStory<typeof Counter> = () => {
  return (
    <AppMockStories>
      <Counter />
    </AppMockStories>
  )
}
