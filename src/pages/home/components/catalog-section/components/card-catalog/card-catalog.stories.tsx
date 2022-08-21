import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppMockStories } from '../../../../../../utils/stories'
import { CardCatalog } from './card-catalog'

export default {
  title: 'Pages/Home/Components/CatalogSection/Components/CardCatalog',
  component: CardCatalog,
} as ComponentMeta<typeof CardCatalog>

export const Playground: ComponentStory<typeof CardCatalog> = () => {
  return (
    <AppMockStories>
      <CardCatalog />
    </AppMockStories>
  )
}
