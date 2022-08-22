import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppMockStories } from '../../../../utils/stories'
import { CatalogSection } from './catalog-section'

export default {
  title: 'Pages/Home/Components/CatalogSection',
  component: CatalogSection,
} as ComponentMeta<typeof CatalogSection>

export const Playground: ComponentStory<typeof CatalogSection> = () => {
  return (
    <AppMockStories>
      <CatalogSection />
    </AppMockStories>
  )
}
