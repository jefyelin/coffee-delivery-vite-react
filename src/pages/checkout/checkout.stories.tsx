import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppMockStories } from '../../utils/stories'
import { Checkout } from './checkout'

export default {
  title: 'Pages/Checkout',
} as ComponentMeta<typeof Checkout>

export const Playground: ComponentStory<typeof Checkout> = () => {
  return (
    <AppMockStories>
      <Checkout />
    </AppMockStories>
  )
}
