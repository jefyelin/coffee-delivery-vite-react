import { ReactNode } from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles'
import { lightTheme } from '../../styles/theme'

interface AppStoriesProps {
  children: ReactNode
}

export function AppStories({ children }: AppStoriesProps) {
  return (
    <>
      <Helmet>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href={`https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&
          family=Roboto:wght@400;700&display=swap`}
          rel='stylesheet'
        />
      </Helmet>
      <ThemeProvider theme={lightTheme}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}
