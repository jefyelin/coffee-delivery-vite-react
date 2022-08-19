import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppMockStories } from '../../../../utils/stories'
import { InfoSection } from './info-section'

export default {
  title: 'Pages/Home/Components/InfoSection',
  component: InfoSection,
} as ComponentMeta<typeof InfoSection>

export const Playground: ComponentStory<typeof InfoSection> = () => {
  return (
    <AppMockStories>
      <InfoSection />
    </AppMockStories>
  )
}
