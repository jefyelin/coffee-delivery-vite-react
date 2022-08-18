import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../../styles'
import { lightTheme } from '../../../styles/theme'

interface AppTestsProps {
  children: ReactNode
}

export function AppTests({ children }: AppTestsProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  )
}
