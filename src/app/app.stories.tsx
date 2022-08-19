import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import { AppMockStories } from '../utils/stories'
import { App } from './app'

export default {
  title: 'App',
  component: App,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/home',
    },
  },
} as ComponentMeta<typeof App>

export const Playground: ComponentStory<typeof App> = () => {
  return (
    <AppMockStories withRoutes={false}>
      <App />
    </AppMockStories>
  )
}
