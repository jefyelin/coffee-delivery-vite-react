import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import cupOfCoffeImageUrl from '../../../../assets/images/illustration/cup-of-coffee.png'
import { Text } from '../../../../components/typography/text'
import { Title } from '../../../../components/typography/title'
import useMediaQuery from '../../../../hooks/media-query/use-media-query'
import { InfoWithIcon } from './components/info-with-icon'
import { Image, InfoContainer, IntroContainer, Section } from './info-section.styles'

export function InfoSection() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(`(min-width: ${theme.screen.md})`)

  return (
    <Section>
      <div>
        <IntroContainer>
          {isDesktop ? (
            <Title variant='h1' color='title'>
              Encontre o café perfeito para qualquer hora do dia
            </Title>
          ) : (
            <Title variant='h1-mobile' color='title'>
              Encontre o café perfeito para qualquer hora do dia
            </Title>
          )}
          <Text variant='regularL' color='subtitle'>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </Text>
        </IntroContainer>
        <InfoContainer>
          <InfoWithIcon
            icon={<ShoppingCart size={22} weight='fill' />}
            iconConfig={{ backgroundColor: 'yellowDark' }}
          >
            Compra simples e segura
          </InfoWithIcon>
          <InfoWithIcon
            icon={<Package size={22} weight='fill' />}
            iconConfig={{ backgroundColor: 'text' }}
          >
            Embalagem mantém o café intacto
          </InfoWithIcon>
          <InfoWithIcon
            icon={<Timer size={22} weight='fill' />}
            iconConfig={{ backgroundColor: 'yellow' }}
          >
            Entrega rápida e rastreada
          </InfoWithIcon>
          <InfoWithIcon
            icon={<Coffee size={22} weight='fill' />}
            iconConfig={{ backgroundColor: 'purple' }}
          >
            O café chega fresquinho até você
          </InfoWithIcon>
        </InfoContainer>
      </div>
      <Image
        src={cupOfCoffeImageUrl}
        alt={`Ilustração de um copo de café com cores branco e preto e com o logo da 
            Coffee Delivery. Ao lado estão grãos de café moído. O fundo da imagem é amarelo 
            em formato de um grão de café`}
      />
    </Section>
  )
}
