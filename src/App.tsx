import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/home'
import { GlobalStyle } from './styles'
import { lightTheme } from './styles/theme'
import { Redirect } from './utils/router'

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Redirect to='/home' />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
