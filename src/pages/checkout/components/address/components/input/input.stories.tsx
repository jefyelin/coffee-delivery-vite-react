import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppMockStories } from '../../../../../../utils/stories'
import { Input } from './input'

export default {
  title: 'Pages/Checkout/Components/Address/Components/Input',
} as ComponentMeta<typeof Input>

export const Playground: ComponentStory<typeof Input> = () => {
  return (
    <AppMockStories>
      <Input isOptional />
    </AppMockStories>
  )
}
