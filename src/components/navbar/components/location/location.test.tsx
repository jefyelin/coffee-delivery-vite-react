import { screen } from '@testing-library/react'
import { describe } from 'vitest'
import { customRender } from '../../../../utils/tests/render'
import { Location } from './location'

describe('Location', () => {
  test('should render with correct location', () => {
    customRender(<Location />)

    expect(screen.getByText('Porto Alegre, RS')).toBeInTheDocument()
  })
})
