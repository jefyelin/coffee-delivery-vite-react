import { screen } from '@testing-library/react'
import { describe, test } from 'vitest'
import { customRender } from '../../../utils/tests/render'
import { Text, TextVariant } from './text'

describe('Text', () => {
  test.each<{ variant: TextVariant }>([
    { variant: 'boldL' },
    { variant: 'boldM' },
    { variant: 'boldS' },
    { variant: 'boldXS' },
    { variant: 'regularL' },
    { variant: 'regularM' },
    { variant: 'regularS' },
  ])('should render with the correct variant: $variant', ({ variant }) => {
    customRender(<Text variant={variant}>Text with variant: {variant}</Text>)

    expect(screen.getByText(`Text with variant: ${variant}`)).toBeInTheDocument()
  })
})
