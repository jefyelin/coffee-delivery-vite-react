import { Route, Routes as ReactRouterDomRoutes } from 'react-router-dom'
import { Navbar } from '../components/navbar'
import { Checkout } from '../pages/checkout'
import { Home } from '../pages/home'
import { PurchaseConfirmation } from '../pages/purchase-confirmation'

export function Routes() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <ReactRouterDomRoutes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/purchase-confirmation' element={<PurchaseConfirmation />} />
      </ReactRouterDomRoutes>
    </>
  )
}
