import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { AppMockStories } from '../../../../utils/stories'
import { CheckoutFormData } from '../../checkout'
import { Payment } from './payment'

export default {
  title: 'Pages/Checkout/Components/Payment',
} as ComponentMeta<typeof Payment>

export const Playground: ComponentStory<typeof Payment> = () => {
  const { control } = useForm<CheckoutFormData>()

  return (
    <AppMockStories>
      <Payment control={control} />
    </AppMockStories>
  )
}
