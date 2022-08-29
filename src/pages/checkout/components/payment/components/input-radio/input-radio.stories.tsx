import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PaymentType } from '../../../../../../domain/models/payment'
import { AppMockStories } from '../../../../../../utils/stories'
import { InputRadio } from './input-radio'

export default {
  title: 'Pages/Checkout/Components/Payment/Components/InputRadio',
} as ComponentMeta<typeof InputRadio>

export const Playground: ComponentStory<typeof InputRadio> = () => {
  return (
    <AppMockStories>
      <InputRadio label='Radio test' paymentType={PaymentType.MONEY} id='radio-test' />
    </AppMockStories>
  )
}
