import styled, { css } from 'styled-components'

interface FieldProps {
  isOptional?: boolean
  error?: boolean
}

export const Container = styled.div`
  display: flex;
  position: relative;
`

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  width: 100%;
`

export const Field = styled.input<FieldProps>`
  width: 100%;
  padding: 0.75rem;
  ${({ isOptional }) =>
    isOptional &&
    css`
      padding-right: 4.375rem;
    `}
  background-color: ${({ theme }) => theme.color.base.input};
  border: 0.0625rem solid
    ${({ theme, error }) => (error ? theme.color.product.error : theme.color.base.button)};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.color.base.text};
  transition: 100ms ease;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.base.label};
  }

  &:focus,
  &:active {
    border-color: ${({ theme, error }) =>
      error ? theme.color.product.error : theme.color.product.yellowDark};
  }
`

export const OptionalInfoContainer = styled.div`
  padding: 0.75rem;
  right: 0;
  position: absolute;
`
