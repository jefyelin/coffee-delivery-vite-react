import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 0.375rem 2.75rem;
  padding: 1.875rem 1.25rem;
  background-color: ${({ theme }) => theme.color.base.card};

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    padding: 1.875rem;
  }
`

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.color.base.text};
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  cursor: pointer;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.color.product.yellow};
  transition: 100ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.product.yellowDark};
  }
`
