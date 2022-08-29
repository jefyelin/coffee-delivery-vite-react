import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { AppMockStories } from '../../../../utils/stories'
import { CheckoutFormData } from '../../checkout'
import { Address } from './address'

export default {
  title: 'Pages/Checkout/Components/Address',
} as ComponentMeta<typeof Address>

export const Playground: ComponentStory<typeof Address> = () => {
  const { control } = useForm<CheckoutFormData>()
  return (
    <AppMockStories>
      <Address control={control} />
    </AppMockStories>
  )
}
