import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppMockStories } from '../../utils/stories'
import { Home } from './home'

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>

export const Playground: ComponentStory<typeof Home> = () => {
  return (
    <AppMockStories>
      <Home />
    </AppMockStories>
  )
}
