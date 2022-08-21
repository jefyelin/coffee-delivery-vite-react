import styled, { css } from 'styled-components'

interface TextContainerProps {
  shouldSetLeftPedding: boolean
}

export const Container = styled.div`
  display: flex;
  padding: 0 0.5rem;
  width: fit-content;
  height: 2.375rem;
  gap: 0.25rem;
  background-color: ${({ theme }) => theme.color.base.button};
  border-radius: 0.375rem;
`

export const Button = styled.button`
  color: ${({ theme }) => theme.color.product.purple};
  transition: ease 100ms;
  padding: 0 4px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.product.purpleDark};
  }
`

export const TextContainer = styled.div<TextContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ shouldSetLeftPedding }) =>
    shouldSetLeftPedding &&
    css`
      padding-left: 0.25rem;
    `}
`
