import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppMockStories } from '../../../../utils/stories'
import { Payment } from './payment'

export default {
  title: 'Pages/Checkout/Components/Payment',
} as ComponentMeta<typeof Payment>

export const Playground: ComponentStory<typeof Payment> = () => {
  return (
    <AppMockStories>
      <Payment handleSubmit={(data) => data} />
    </AppMockStories>
  )
}
