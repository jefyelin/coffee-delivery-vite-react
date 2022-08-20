import { Route, Routes as ReactRouterDomRoutes } from 'react-router-dom'
import { Navbar } from '../components/navbar'
import { Home } from '../pages/home'

export function Routes() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <ReactRouterDomRoutes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </ReactRouterDomRoutes>
    </>
  )
}
