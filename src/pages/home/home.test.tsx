import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import { Home } from './home'

test('shoul render home page', () => {
  render(<Home />)

  expect(screen.getByText('Home')).toBeInTheDocument()
})
