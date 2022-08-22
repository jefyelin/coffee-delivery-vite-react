import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../../../../../../components/counter'
import { Text } from '../../../../../../components/typography/text'
import { Title } from '../../../../../../components/typography/title'
import { Product } from '../../../../../../domain/models/product'
import {
  ActionContainer,
  BuyContainer,
  Cart,
  Container,
  DescriptionContainer,
  Image,
  Tag,
  TagsContainer,
  ValueContainer,
} from './card-catalog.styles'

interface CardCatalog {
  product: Product
}

export function CardCatalog({ product }: CardCatalog) {
  return (
    <Container id={product.id}>
      <Image src={product.image.url} alt={product.image.description} />
      <TagsContainer>
        {product.tags.map((tag) => (
          <Tag key={tag.id}>
            <Text variant='boldXS' color='yellowDark'>
              {tag.name.toUpperCase()}
            </Text>
          </Tag>
        ))}
      </TagsContainer>
      <DescriptionContainer>
        <Title variant='h4' color='subtitle'>
          {product.name}
        </Title>
        <Text variant='regularS' color='label'>
          {product.description}
        </Text>
      </DescriptionContainer>
      <BuyContainer>
        <ValueContainer>
          <Text variant='regularS' color='text'>
            R$
          </Text>
          <Text variant='boldL' color='text'>
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
            }).format(product.price)}
          </Text>
        </ValueContainer>
        <ActionContainer>
          <Counter item={{ name: product.name, id: product.id }} />
          <Cart aria-label={`Adicionar ${product.name} no carrinho de compras`}>
            <ShoppingCart size={22} weight='fill' alt='Ícone de um carrinho de compras' />
          </Cart>
        </ActionContainer>
      </BuyContainer>
    </Container>
  )
}
