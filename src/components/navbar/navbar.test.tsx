import { screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe } from 'vitest'
import { customRender } from '../../utils/tests/render'
import { userEvent } from '../../utils/tests/setup'
import { Navbar } from './navbar'

describe('Navbar', () => {
  test('should render correctly and redirect to home page when user clicks on logo', async () => {
    customRender(
      <MemoryRouter initialEntries={['/test-navbar']}>
        <Routes>
          <Route path='/test-navbar' element={<Navbar />} />
          <Route path='/' element={<h1>Redirect to home working</h1>} />
        </Routes>
      </MemoryRouter>,
    )

    expect(screen.queryByText('Redirect to home working')).not.toBeInTheDocument()

    const buttonCheckout = screen.getByRole('button', {
      name: /ícone de um carrinho de compras/i,
    })

    const logo = screen.getByRole('img', {
      // eslint-disable-next-line max-len
      name: 'Logo da Coffee Delivery com a ilustração de um copo roxo com um foguete branco decolando',
    })

    const location = screen.getByText('Porto Alegre, RS')

    expect(logo).toBeInTheDocument()
    expect(location).toBeInTheDocument()
    expect(buttonCheckout).toBeInTheDocument()

    userEvent.click(logo)

    expect(await screen.findByText('Redirect to home working')).toBeInTheDocument()
    expect(logo).not.toBeInTheDocument()
    expect(location).not.toBeInTheDocument()
    expect(buttonCheckout).not.toBeInTheDocument()
  })

  test(`should render correctly and redirect to checkout when user clicks 
    on checkout button`, async () => {
    customRender(
      <MemoryRouter initialEntries={['/test-navbar']}>
        <Routes>
          <Route path='/test-navbar' element={<Navbar />} />
          <Route path='/checkout' element={<h1>Redirect to checkout working</h1>} />
        </Routes>
      </MemoryRouter>,
    )

    expect(screen.queryByText('Redirect to checkout working')).not.toBeInTheDocument()

    const buttonCheckout = screen.getByRole('button', {
      name: /ícone de um carrinho de compras/i,
    })

    const logo = screen.getByRole('img', {
      // eslint-disable-next-line max-len
      name: 'Logo da Coffee Delivery com a ilustração de um copo roxo com um foguete branco decolando',
    })

    const location = screen.getByText('Porto Alegre, RS')

    expect(logo).toBeInTheDocument()
    expect(location).toBeInTheDocument()
    expect(buttonCheckout).toBeInTheDocument()

    userEvent.click(buttonCheckout)

    expect(await screen.findByText('Redirect to checkout working')).toBeInTheDocument()
    expect(logo).not.toBeInTheDocument()
    expect(location).not.toBeInTheDocument()
    expect(buttonCheckout).not.toBeInTheDocument()
  })
})
