import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppMockStories } from '../../../../utils/stories'
import { Location } from './location'

export default {
  title: 'Components/Navbar/Components/Location',
  component: Location,
} as ComponentMeta<typeof Location>

export const Playground: ComponentStory<typeof Location> = () => {
  return (
    <AppMockStories>
      <Location />
    </AppMockStories>
  )
}
