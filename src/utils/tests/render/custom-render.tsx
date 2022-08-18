import { render } from '@testing-library/react'
import { AppTests } from './app-tests'

export const customRender = (ui: React.ReactElement, options = {}) =>
  render(<AppTests>{ui}</AppTests>, {
    wrapper: ({ children }) => children,
    ...options,
  })
