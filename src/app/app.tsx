import { ThemeProvider } from 'styled-components'
import { CheckoutProvider } from '../context/checkout'
import { Routes } from '../routes'
import { GlobalStyle } from '../styles'
import { lightTheme } from '../styles/theme'
import { AppContainer, ContentContainer } from './app.styles'

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppContainer>
        <ContentContainer>
          <CheckoutProvider>
            <Routes />
          </CheckoutProvider>
        </ContentContainer>
      </AppContainer>
      <GlobalStyle />
    </ThemeProvider>
  )
}
