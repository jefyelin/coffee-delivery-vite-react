import { faker } from '@faker-js/faker'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { nanoid } from 'nanoid'
import { AppMockStories } from '../../utils/stories'
import { Counter } from './counter'

export default {
  title: 'Components/Counter',
} as ComponentMeta<typeof Counter>

export const Playground: ComponentStory<typeof Counter> = () => {
  return (
    <AppMockStories>
      <Counter
        product={{
          description: faker.commerce.productDescription(),
          id: nanoid(),
          image: {
            description: faker.commerce.productDescription(),
            url: faker.image.imageUrl(),
          },
          name: faker.commerce.productName(),
          price: Number(faker.commerce.price()),
          tags: [
            { id: nanoid(), name: faker.commerce.productAdjective() },
            { id: nanoid(), name: faker.commerce.productAdjective() },
          ],
        }}
      />
    </AppMockStories>
  )
}
