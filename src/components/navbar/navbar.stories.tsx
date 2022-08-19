import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppMockStories } from '../../utils/stories'
import { Navbar } from './navbar'

export default {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Navbar>

export const Playground: ComponentStory<typeof Navbar> = () => (
  <AppMockStories>
    <Navbar />
  </AppMockStories>
)
