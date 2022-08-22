import { Title } from '../../../../components/typography/title'
import { Container, ContainerProducts } from './catalog-section.styles'
import { CardCatalog } from './components/card-catalog'
import { productItems } from './product-items'

export function CatalogSection() {
  return (
    <Container>
      <Title variant='h2' color='subtitle'>
        Nossos cafés
      </Title>
      <ContainerProducts>
        {productItems.map((product) => (
          <CardCatalog key={product.id} product={product} />
        ))}
      </ContainerProducts>
    </Container>
  )
}
