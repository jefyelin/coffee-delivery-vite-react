import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.color.product.purpleLight};
  color: ${({ theme }) => theme.color.product.purple};
`
