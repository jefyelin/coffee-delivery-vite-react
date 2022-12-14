import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { ScrollToTop } from '../components/scroll-to-top'
import { AppMockStories } from '../utils/stories'
import { App } from './app'

export default {
  title: 'App',
  component: App,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <ScrollToTop />
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof App>

export const Playground: ComponentStory<typeof App> = () => {
  return (
    <AppMockStories withRoutes={false}>
      <App />
    </AppMockStories>
  )
}
