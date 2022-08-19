import styled from 'styled-components'

export const Button = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5625rem;
  background-color: ${({ theme }) => theme.color.product.yellowLight};
  border-radius: 0.375rem;
  color: ${({ theme }) => theme.color.product.yellowDark};
  cursor: pointer;
  transition: ease 100ms;

  &:hover,
  &:focus {
    border: 2px solid ${({ theme }) => theme.color.product.yellowDark};
    outline: none;
  }
`

export const ItemsCounter = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${({ theme }) => theme.color.product.yellowDark};
  border-radius: 100%;
  position: absolute;
  top: -0.5625rem;
  right: -0.5625rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
