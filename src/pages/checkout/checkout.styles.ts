import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  gap: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.screen.max}) {
    grid-template-columns: 1.3fr 1fr;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
`

export const AddressAndPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
