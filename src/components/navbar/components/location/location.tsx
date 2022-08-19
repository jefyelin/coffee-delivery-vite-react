import { MapPin } from 'phosphor-react'
import { Text } from '../../../typography/text'
import { Container } from './location.styles'

export function Location() {
  return (
    <Container title='Localização' aria-describedby='location'>
      <MapPin
        size={22}
        weight='fill'
        alt='Ícone de um alfinete que ilustra a localização em um mapa'
      />
      <Text id='location' variant='regularS' color='purpleDark'>
        Porto Alegre, RS
      </Text>
    </Container>
  )
}
