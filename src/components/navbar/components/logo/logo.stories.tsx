import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppMockStories } from '../../../../utils/stories'
import { Logo } from './logo'

export default {
  title: 'Components/Navbar/Components/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>

export const Playground: ComponentStory<typeof Logo> = () => (
  <AppMockStories>
    <Logo />
  </AppMockStories>
)
