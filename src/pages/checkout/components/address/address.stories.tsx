import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppMockStories } from '../../../../utils/stories'
import { Address, AddressFormData } from './address'

export default {
  title: 'Pages/Checkout/Components/Address',
} as ComponentMeta<typeof Address>

export const Playground: ComponentStory<typeof Address> = () => {
  return (
    <AppMockStories>
      <Address handleSubmit={(data: AddressFormData) => console.log(data)} />
    </AppMockStories>
  )
}
