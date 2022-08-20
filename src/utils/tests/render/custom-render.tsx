import { render } from '@testing-library/react'
import { AppAllProvidersForTheTests } from './app-all-providers-for-the-tests'

export const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: AppAllProvidersForTheTests,
    ...options,
  })
