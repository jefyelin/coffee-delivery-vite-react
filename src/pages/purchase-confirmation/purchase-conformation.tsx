import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import deliveryImageUrl from '../../assets/images/illustration/delivery.png'
import { Text } from '../../components/typography/text'
import { Title } from '../../components/typography/title'
import { PaymentType } from '../../domain/models/payment'
import { useCheckout } from '../../hooks/checkout'
import { Redirect } from '../../utils/router'
import {
  Container,
  IconContainer,
  IllustrationImageContainer,
  InfoContainer,
  InfoContainerBorder,
  InfoContent,
  InfoWithIconContainer,
  Main,
} from './purchase-confirmation.styles'

export function PurchaseConfirmation() {
  const { delivery } = useCheckout()

  const { userInfo } = delivery

  if (!userInfo) {
    return <Redirect to='/' />
  }

  return (
    <Main>
      <div>
        <Title variant='h2' color='yellowDark'>
          Uhu! Pedido confirmado
        </Title>
        <Text variant='regularL' color='subtitle'>
          Agora é só aguardar que logo o café chegará até você
        </Text>
      </div>
      <Container>
        <InfoContent>
          <InfoContainerBorder>
            <InfoContainer>
              <InfoWithIconContainer>
                <IconContainer backgroundColor='purple'>
                  <MapPin size={16} />
                </IconContainer>
                <div>
                  <Text variant='regularM' color='text'>
                    Entrega em
                    <strong>
                      {' '}
                      {userInfo.street}, {userInfo.number}, {userInfo?.complement}
                    </strong>
                  </Text>
                  <Text variant='regularM' color='text'>
                    {userInfo.neighborhood} - {userInfo.city}, {userInfo.state}
                  </Text>
                </div>
              </InfoWithIconContainer>
              <InfoWithIconContainer>
                <IconContainer backgroundColor='yellow'>
                  <Timer size={16} />
                </IconContainer>
                <div>
                  <Text variant='regularM' color='text'>
                    Previsão de entrega
                  </Text>
                  <Text variant='boldXM' color='text'>
                    20 min - 30 min
                  </Text>
                </div>
              </InfoWithIconContainer>
              <InfoWithIconContainer>
                <IconContainer backgroundColor='yellowDark'>
                  <CurrencyDollar size={16} />
                </IconContainer>
                <div>
                  <Text variant='regularM' color='text'>
                    Pagamento na entrega
                  </Text>
                  {userInfo.paymentType === PaymentType.CREDIT && (
                    <Text variant='boldXM' color='text'>
                      Cartão de Crédito
                    </Text>
                  )}
                  {userInfo.paymentType === PaymentType.DEBIT && (
                    <Text variant='boldXM' color='text'>
                      Cartão de Débito
                    </Text>
                  )}
                  {userInfo.paymentType === PaymentType.MONEY && (
                    <Text variant='boldXM' color='text'>
                      Dinheiro
                    </Text>
                  )}
                </div>
              </InfoWithIconContainer>
            </InfoContainer>
          </InfoContainerBorder>
        </InfoContent>
        <IllustrationImageContainer>
          <img
            src={deliveryImageUrl}
            alt={`ilustração de um homem pardo de cabelo preto com uma camisa 
            amarela uma calça verde indo entregar o seu café em uma moto roxa`}
          />
        </IllustrationImageContainer>
      </Container>
    </Main>
  )
}
