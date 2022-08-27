import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.25rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.color.base.card};

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    padding: 2.5rem;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${({ theme }) => theme.color.product.purple};
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const InputRadioContainer = styled.div`
  display: grid;
  gap: 0.75rem;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
