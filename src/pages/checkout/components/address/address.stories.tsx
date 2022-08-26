import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppMockStories } from '../../../../utils/stories'
import { Address } from './address'

export default {
  title: 'Pages/Checkout/Components/Address',
} as ComponentMeta<typeof Address>

export const Playground: ComponentStory<typeof Address> = () => {
  return (
    <AppMockStories>
      <Address />
    </AppMockStories>
  )
}
