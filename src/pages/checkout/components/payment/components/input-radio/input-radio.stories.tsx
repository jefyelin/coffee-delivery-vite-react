import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppMockStories } from '../../../../../../utils/stories'
import { InputRadio } from './input-radio'

export default {
  title: 'Pages/Checkout/Components/Payment/Components/InputRadio',
} as ComponentMeta<typeof InputRadio>

export const Playground: ComponentStory<typeof InputRadio> = () => {
  return (
    <AppMockStories>
      <InputRadio label='Radio test' paymentType='money' id='radio-test' />
    </AppMockStories>
  )
}
