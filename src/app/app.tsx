import { ThemeProvider } from 'styled-components'
import { Routes } from '../routes'
import { GlobalStyle } from '../styles'
import { lightTheme } from '../styles/theme'
import { AppContainer, ContentContainer } from './app.styles'

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppContainer>
        <ContentContainer>
          <Routes />
        </ContentContainer>
      </AppContainer>
      <GlobalStyle />
    </ThemeProvider>
  )
}
