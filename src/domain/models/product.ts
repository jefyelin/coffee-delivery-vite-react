export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: {
    url: string
    description: string
  }
  tags: {
    id: string
    name: string
  }[]
}
