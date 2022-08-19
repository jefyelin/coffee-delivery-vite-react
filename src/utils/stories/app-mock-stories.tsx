import { ReactNode } from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles'
import { lightTheme } from '../../styles/theme'

interface AppStoriesProps {
  children: ReactNode
  withRoutes?: boolean
}

export function AppMockStories({ children, withRoutes = true }: AppStoriesProps) {
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
        {withRoutes && <BrowserRouter>{children}</BrowserRouter>}
        {!withRoutes && <>{children}</>}
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}
