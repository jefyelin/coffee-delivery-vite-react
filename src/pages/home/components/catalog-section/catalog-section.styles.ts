import styled from 'styled-components'

export const Container = styled.section`
  gap: 3.375rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.875rem;
`

export const ContainerProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    justify-content: flex-start;
  }
`
