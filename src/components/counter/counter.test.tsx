import { screen } from '@testing-library/react'
import { describe } from 'vitest'
import { productMock } from '../../mocks'
import { customRender } from '../../utils/tests/render'
import { userEvent } from '../../utils/tests/setup'
import { Counter } from './counter'

describe('Counter', () => {
  test('should render correctly', () => {
    customRender(<Counter product={productMock} />)

    expect(
      screen.queryByRole('button', {
        name: `Remover ${productMock.name}`,
      }),
    ).not.toBeInTheDocument()
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: `Adicionar ${productMock.name}`,
      }),
    ).toBeInTheDocument()
  })

  test('should be able to increment and decrement the counter', async () => {
    customRender(<Counter product={productMock} />)

    expect(screen.getByText('0')).toBeInTheDocument()

    userEvent.click(screen.getByRole('button', { name: `Adicionar ${productMock.name}` }))

    expect(await screen.findByText('1')).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: `Remover ${productMock.name}`,
      }),
    ).toBeInTheDocument()

    userEvent.click(
      screen.getByRole('button', {
        name: `Remover ${productMock.name}`,
      }),
    )

    expect(await screen.findByText('0')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: `Adicionar ${productMock.name}` }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('button', {
        name: `Remover ${productMock.name}`,
      }),
    ).not.toBeInTheDocument()
  })
})
