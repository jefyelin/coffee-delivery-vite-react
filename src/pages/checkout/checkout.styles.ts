import styled from 'styled-components'

export const Main = styled.main`
  display: grid;
  gap: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.screen.max}) {
    grid-template-columns: 2fr 1fr;
  }
`

export const AddressAndPaymentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
`

export const AddressAndPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const PurchaseReviewSection = styled.section``
