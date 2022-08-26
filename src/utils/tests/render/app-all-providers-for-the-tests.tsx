import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { CheckoutProvider } from '../../../context/checkout'
import { GlobalStyle } from '../../../styles'
import { lightTheme } from '../../../styles/theme'

interface AppTestsProps {
  children: ReactNode
}

export function AppAllProvidersForTheTests({ children }: AppTestsProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CheckoutProvider>{children}</CheckoutProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
