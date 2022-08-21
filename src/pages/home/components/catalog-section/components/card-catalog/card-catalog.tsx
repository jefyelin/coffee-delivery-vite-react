import { ShoppingCart } from 'phosphor-react'
import imageUrlTest from '../../../../../../assets/images/products/coffee-arabe.png'
import { Counter } from '../../../../../../components/counter'
import { Text } from '../../../../../../components/typography/text'
import { Title } from '../../../../../../components/typography/title'
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

export function CardCatalog() {
  return (
    <Container>
      <Image src={imageUrlTest} alt='' />
      <TagsContainer>
        <Tag>
          <Text variant='boldXS' color='yellowDark'>
            {'especial'.toUpperCase()}
          </Text>
        </Tag>
      </TagsContainer>
      <DescriptionContainer>
        <Title variant='h4' color='subtitle'>
          Árabe
        </Title>
        <Text variant='regularS' color='label'>
          Bebida preparada com grãos de café árabe e especiarias
        </Text>
      </DescriptionContainer>
      <BuyContainer>
        <ValueContainer>
          <Text variant='regularS' color='text'>
            R$
          </Text>
          <Text variant='boldL' color='text'>
            9,90
          </Text>
        </ValueContainer>
        <ActionContainer>
          <Counter />
          <Cart>
            <ShoppingCart size={22} weight='fill' />
          </Cart>
        </ActionContainer>
      </BuyContainer>
    </Container>
  )
}
