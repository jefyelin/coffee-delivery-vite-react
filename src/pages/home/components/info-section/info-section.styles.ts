import styled from 'styled-components'

export const Section = styled.section`
  margin-top: 3.125rem;
  display: grid;
  align-items: center;
  gap: 3.5rem;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    grid-template-columns: 1.2fr 1fr;
    margin-top: 5.625rem;
  }
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InfoContainer = styled.div`
  margin-top: 2.25rem;
  display: grid;
  row-gap: 1.25rem;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    margin-top: 4.125rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 1rem;
    row-gap: 2.5rem;
  }
`

export const Image = styled.img`
  width: 100%;
`
