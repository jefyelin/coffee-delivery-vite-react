import { Cart } from './components/cart'
import { Location } from './components/location'
import { Logo } from './components/logo'
import { Container, LocationAndCartContainer } from './navbar.styles'

export function Navbar() {
  return (
    <Container>
      <Logo />
      <LocationAndCartContainer>
        <Location />
        <Cart />
      </LocationAndCartContainer>
    </Container>
  )
}
