import { Title } from '../../components/typography/title'
import {
  AddressAndPaymentContainer,
  AddressAndPaymentSection,
  Main,
  PurchaseReviewSection,
} from './checkout.styles'
import { Address } from './components/address'
import { Payment } from './components/payment'

export function Checkout() {
  return (
    <Main>
      <AddressAndPaymentSection>
        <Title variant='h5' color='subtitle'>
          Complete seu pedido
        </Title>
        <AddressAndPaymentContainer>
          <Address handleSubmit={(data) => console.log(data)} />
          <Payment handleSubmit={(data) => console.log(data)} />
        </AddressAndPaymentContainer>
      </AddressAndPaymentSection>
      <PurchaseReviewSection>
        <Title variant='h5' color='subtitle'>
          Cafés selecionados
        </Title>
      </PurchaseReviewSection>
    </Main>
  )
}
