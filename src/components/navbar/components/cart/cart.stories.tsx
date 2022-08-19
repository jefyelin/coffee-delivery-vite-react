import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppMockStories } from '../../../../utils/stories'
import { Cart } from './cart'

export default {
  title: 'Components/Navbar/Components/Cart',
  component: Cart,
} as ComponentMeta<typeof Cart>

export const Playground: ComponentStory<typeof Cart> = () => (
  <AppMockStories>
    <Cart />
  </AppMockStories>
)
