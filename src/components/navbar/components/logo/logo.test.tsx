import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, test } from 'vitest'
import { customRender } from '../../../../utils/tests/render'
import { Logo } from './logo'

describe('Logo', () => {
  test('should redirect to correct route if user clicks on logo image', async () => {
    customRender(
      <MemoryRouter initialEntries={['/test-logo']}>
        <Routes>
          <Route path='/test-logo' element={<Logo />} />
          <Route path='/' element={<h1>Redirect working</h1>} />
        </Routes>
      </MemoryRouter>,
    )
    expect(screen.queryByText('Redirect working')).not.toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/')

    userEvent.click(screen.getByRole('link'))

    expect(await screen.findByText('Redirect working')).toBeInTheDocument()
  })
})
