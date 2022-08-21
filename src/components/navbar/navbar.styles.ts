import styled from 'styled-components'

export const Container = styled.nav`
  padding: 1.25rem 0;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    padding: 2rem 0;
  }
`

export const LocationAndCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
