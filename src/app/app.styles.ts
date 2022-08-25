import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const ContentContainer = styled.div`
  width: 100%;
  min-width: 360px;
  max-width: ${({ theme }) => theme.screen.max};
  padding: 0 1rem;

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    padding: 0;
  }
`
