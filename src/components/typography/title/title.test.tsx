import { screen } from '@testing-library/react'
import { describe, test } from 'vitest'
import { customRender } from '../../../utils/tests/render'
import { Title, TitleVariant } from './title'

describe('Title', () => {
  test.each<{ variant: TitleVariant }>([
    { variant: 'h1' },
    { variant: 'h2' },
    { variant: 'h3' },
    { variant: 'h4' },
    { variant: 'h5' },
  ])('should render with correct variant: $variant', ({ variant }) => {
    customRender(<Title variant={variant}>Title with variant: {variant}</Title>)

    expect(screen.getByText(`Title with variant: ${variant}`))
  })
})
