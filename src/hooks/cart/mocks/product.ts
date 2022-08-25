import { faker } from '@faker-js/faker'
import { nanoid } from 'nanoid'
import { Product } from '../../../domain/models/product'

export const productMock: Product = {
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
}

export const additionalProductMock: Product = {
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
}
