import styled from 'styled-components'

interface LabelProps {
  error?: boolean
}

export const Label = styled.label<LabelProps>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.product.purple};
  gap: 0.75rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.base.button};
  border: 0.0625rem solid
    ${({ theme, error }) => (error ? theme.color.product.error : theme.color.base.button)};
  border-radius: 0.375rem;
  cursor: pointer;
  outline: none;
  transition: 100ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.base.hover};
    border-color: ${({ theme }) => theme.color.base.button};
  }

  &:focus {
    background-color: ${({ theme }) => theme.color.base.hover};
    border-color: ${({ theme }) => theme.color.product.purple};
  }
`

export const Input = styled.input`
  appearance: none;
  position: absolute;

  &:checked ~ label {
    background-color: ${({ theme }) => theme.color.product.purpleLight};
    border-color: ${({ theme }) => theme.color.product.purple};
  }
`
