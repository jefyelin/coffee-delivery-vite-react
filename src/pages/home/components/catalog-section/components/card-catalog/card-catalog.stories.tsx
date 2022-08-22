import { ComponentMeta, ComponentStory } from '@storybook/react'
import { nanoid } from 'nanoid'
import imageUrl from '../../../../../../assets/images/products/coffee-capuccino.png'
import { AppMockStories } from '../../../../../../utils/stories'
import { CardCatalog } from './card-catalog'

export default {
  title: 'Pages/Home/Components/CatalogSection/Components/CardCatalog',
  component: CardCatalog,
} as ComponentMeta<typeof CardCatalog>

const tags = [
  {
    id: nanoid(),
    name: 'tradicional',
  },
  {
    id: nanoid(),
    name: 'com leite',
  },
]

const image = {
  url: imageUrl,
  description: 'café de capuccino',
}

export const Playground: ComponentStory<typeof CardCatalog> = () => {
  return (
    <AppMockStories>
      <CardCatalog
        product={{
          id: nanoid(),
          tags,
          image,
          name: 'Cappucino',
          description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
          price: 9.9,
        }}
      />
    </AppMockStories>
  )
}
